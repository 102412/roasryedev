import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
const origin = 'https://roasryedev.vercel.app'
const pages = {
  home: { path: '/', title: 'Custom Websites in Lawrenceburg & Lexington | Roas Rye Development', description: 'Custom-coded websites for local businesses in Lawrenceburg, Lexington and nearby Kentucky communities. Packages start at $179.99.' },
  work: { path: '/work/', title: 'Website Portfolio Demos | Roas Rye Development', description: 'Explore website concepts for local restaurants, home service businesses and wellness studios.' },
  services: { path: '/services/', title: 'Website Services & Pricing | Roas Rye Development', description: 'Compare custom website packages, starting at $179.99, for Lawrenceburg, Lexington and surrounding Kentucky communities.' },
  contact: { path: '/contact/', title: 'Contact & Request a Quote | Roas Rye Development', description: 'Tell Roas Rye Development about your website project or call and text directly.' },
}
let source = readFileSync('index.html', 'utf8')
source = source.replace(/(href|src)="(styles\.css|extra\.css|gifts\.css|logo\.css|direct\.css|combined\.css|site\.js|enhancements\.js|gifts\.js|logo\.js|direct\.js)"/g, '$1="/$2"')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.values(pages).map(page => `<url><loc>${origin}${page.path}</loc></url>`).join('')}</urlset>\n`
for (const target of ['dist', 'outputs/roas-rye-development']) {
  rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  for (const file of ['site.js','enhancements.js','gifts.js','logo.js','logo.css','direct.js','direct.css','combined.css','extra.css','gifts.css','share-preview.png']) cpSync(file, `${target}/${file}`)
  cpSync('src/styles.css', `${target}/styles.css`)
  for (const [name, page] of Object.entries(pages)) {
    const metadata = `<meta name="description" content="${page.description}"><link rel="canonical" href="${origin}${page.path}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:type" content="website"><meta property="og:url" content="${origin}${page.path}"><meta property="og:image" content="${origin}/share-preview.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${origin}/share-preview.png">`
    let html = source.replace(/<meta name="description"[\s\S]*?<title>[\s\S]*?<\/title>/, `${metadata}\n<title>${page.title}</title>`)
    html = html.replace(/data-view="(home|work|services|contact|direct)"(?: hidden)?/g, (_, view) => `data-view="${view}"${view === name || (view === 'direct' && name === 'contact') ? '' : ' hidden'}`)
    const dir = name === 'home' ? target : `${target}/${name}`
    mkdirSync(dir, { recursive: true })
    writeFileSync(`${dir}/index.html`, html)
  }
  writeFileSync(`${target}/sitemap.xml`, sitemap)
  writeFileSync(`${target}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
  if (target.startsWith('outputs/')) cpSync('README.md', `${target}/README.md`)
}
console.log('Built four searchable pages in dist/ and outputs/roas-rye-development/.')

