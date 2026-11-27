import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript; charset=utf-8' }
createServer(async (request, response) => { const pathname = request.url.split('?')[0]; const file = pathname === '/' ? 'index.html' : pathname.slice(1); try { const content = await readFile(join(process.cwd(), file)); response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }); response.end(content) } catch { response.writeHead(404); response.end('Not found') } }).listen(4173, () => console.log('Preview at http://localhost:4173'))
