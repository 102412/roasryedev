import { readFileSync, existsSync } from 'node:fs'
const requiredFiles = ['index.html', 'site.js', 'src/styles.css', 'README.md']
const page = readFileSync('index.html', 'utf8'); const script = readFileSync('site.js', 'utf8')
for (const file of requiredFiles) if (!existsSync(file)) throw new Error(`Missing ${file}`)
for (const text of ['Roas Rye Development', 'Basic', '$179.99', 'Pro', '$234.99', 'Advanced', '$400', 'Portfolio demo', 'id="contact-form"', 'formEndpoint']) if (!page.includes(text) && !script.includes(text)) throw new Error(`Missing required content: ${text}`)
if (page.includes('mailto:')) throw new Error('A public mailto link was added without a supplied email address.')
console.log('Static checks passed: key content, contact safeguard, and required files present.')
