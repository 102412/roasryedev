import { cpSync, mkdirSync, rmSync } from 'node:fs'
const targets = ['dist', 'outputs/roas-rye-development']
for (const target of targets) {
  rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  cpSync('index.html', `${target}/index.html`)
  cpSync('site.js', `${target}/site.js`)
  cpSync('enhancements.js', `${target}/enhancements.js`)
  cpSync('gifts.js', `${target}/gifts.js`)
  cpSync('logo.js', `${target}/logo.js`)
  cpSync('logo.css', `${target}/logo.css`)
  cpSync('direct.js', `${target}/direct.js`)
  cpSync('direct.css', `${target}/direct.css`)
  cpSync('combined.css', `${target}/combined.css`)
  cpSync('extra.css', `${target}/extra.css`)
  cpSync('gifts.css', `${target}/gifts.css`)
  cpSync('src/styles.css', `${target}/styles.css`)
  if (target.startsWith('outputs/')) cpSync('README.md', `${target}/README.md`)
}
console.log('Built dependency-free static site in dist/ and outputs/roas-rye-development/.')
