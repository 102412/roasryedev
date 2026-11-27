import assert from 'node:assert/strict'
import handler, { isPublicAddress, isPublicIPv4, pageText } from '../api/ai.js'

for (const ip of ['127.0.0.1','10.0.0.1','172.16.0.1','192.168.1.1','169.254.169.254','100.64.0.1','203.0.113.1','::1','::ffff:127.0.0.1','fc00::1','fe80::1','2001:db8::1']) assert.equal(isPublicAddress(ip), false, ip)
assert.equal(isPublicIPv4('8.8.8.8'), true)
assert.equal(isPublicAddress('2606:4700:4700::1111'), true)
assert.equal(pageText('<h1>Welcome</h1><script>secret()</script><p>Local business</p>'), 'Welcome Local business')
const oldKey = process.env.OPENROUTER_API_KEY
delete process.env.OPENROUTER_API_KEY
const res = { setHeader() {}, status(code) { this.code = code; return this }, json(value) { this.body = value; return this } }
await handler({method:'POST',headers:{},body:{action:'design',prompt:'warm'}},res)
assert.equal(res.code,503)
assert.equal(res.body.error,'AI is not configured yet.')
if (oldKey !== undefined) process.env.OPENROUTER_API_KEY = oldKey
const originalFetch = globalThis.fetch
process.env.OPENROUTER_API_KEY = 'test-only-not-a-real-key'
globalThis.fetch = async (_url, options) => {
  const body = JSON.parse(options.body)
  assert.equal(body.model, 'openrouter/free')
  assert.equal(body.response_format.type, 'json_object')
  return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ '--accent':'#123456','--paper':'#ffffff','--ink':'#111111','--deep':'#222222','--warm':'#eeeeee', unwanted:'ignored' }) } }] }), { status: 200 })
}
const success = { setHeader() {}, status(code) { this.code = code; return this }, json(value) { this.body = value; return this } }
await handler({method:'POST',headers:{'x-forwarded-for':'198.51.100.9'},body:{action:'design',prompt:'warm and friendly'}},success)
assert.equal(success.code,200)
assert.equal(success.body['--accent'],'#123456')
assert.equal(success.body.unwanted,undefined)
const rejected = { setHeader() {}, status(code) { this.code = code; return this }, json(value) { this.body = value; return this } }
await handler({method:'POST',headers:{'x-forwarded-for':'198.51.100.10'},body:{action:'website',url:'http://127.0.0.1'}},rejected)
assert.equal(rejected.code,502)
globalThis.fetch = originalFetch
if (oldKey === undefined) delete process.env.OPENROUTER_API_KEY; else process.env.OPENROUTER_API_KEY = oldKey
console.log('AI safety and unconfigured-response checks passed.')

