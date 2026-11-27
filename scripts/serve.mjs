import './build.mjs'
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, resolve, sep } from 'node:path'
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' }
const root = resolve('dist')
createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  const file = resolve(join(root, pathname.endsWith('/') ? `${pathname}index.html` : pathname))
  if (!file.startsWith(root + sep)) { response.writeHead(403); response.end(); return }
  try { const content = await readFile(file); response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }); response.end(content) }
  catch { response.writeHead(404); response.end('Not found') }
}).listen(4173, () => console.log('Preview at http://localhost:4173'))

