import { cpSync, mkdirSync, rmSync } from 'node:fs'
const targets = ['dist', 'outputs/roas-rye-development']
for (const target of targets) {
  rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  cpSync('index.html', `${target}/index.html`)
  cpSync('site.js', `${target}/site.js`)
  cpSync('src/styles.css', `${target}/styles.css`)
  if (target.startsWith('outputs/')) cpSync('README.md', `${target}/README.md`)
}
console.log('Built dependency-free static site in dist/ and outputs/roas-rye-development/.')
