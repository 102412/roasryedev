import { FormEvent, useEffect, useState } from 'react'
import { contactEmail, demos, formEndpoint, tiers } from './content'

type Page = 'home' | 'work' | 'services' | 'contact'

const nav: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' }, { label: 'Work', page: 'work' }, { label: 'Services', page: 'services' }, { label: 'Contact', page: 'contact' },
]

function setMeta(page: Page) {
  const titles: Record<Page, string> = {
    home: 'Roas Rye Development — Custom websites for local business',
    work: 'Work — Roas Rye Development', services: 'Services & pricing — Roas Rye Development', contact: 'Start a project — Roas Rye Development',
  }
  document.title = titles[page]
}

function BrowserPreview({ type }: { type: typeof demos[number]['slug'] }) {
  const copy = type === 'restaurant'
    ? { brand: 'Morrow', nav: 'Menu   Story   Visit', headline: 'Good food. No guesswork.', cta: 'View tonight’s menu', extras: ['Seasonal plates', '7 days a week', 'Find a table'] }
    : type === 'trades'
      ? { brand: 'Northline', nav: 'Services   Areas   About', headline: 'A better way to get it fixed.', cta: 'Request service', extras: ['Licensed work', 'Local service', 'Get an estimate'] }
      : { brand: 'Stillwell', nav: 'Classes   Studio   Notes', headline: 'Find room to reset.', cta: 'See the schedule', extras: ['Small groups', 'New here?', 'Book a visit'] }
  return <div className={`browser browser--${type}`} aria-label={`${copy.brand} portfolio demo preview`}>
    <div className="browser__chrome"><span/><span/><span/><i>example-site.com</i></div>
    <div className="browser__site"><div className="mini-nav"><b>{copy.brand}</b><small>{copy.nav}</small></div>
      <div className="mini-hero"><p>Portfolio demo</p><h3>{copy.headline}</h3><button>{copy.cta} <span>↗</span></button></div>
      <div className="mini-cards">{copy.extras.map(item => <div key={item}>{item}</div>)}</div>
    </div>
  </div>
}

function FinishLab() {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('#e9502d')
  const [opacity, setOpacity] = useState(84)
  const [bend, setBend] = useState(6)
  useEffect(() => { document.documentElement.style.setProperty('--accent', color); document.documentElement.style.setProperty('--panel-opacity', `${opacity}%`); document.documentElement.style.setProperty('--bend', `${bend}px`) }, [color, opacity, bend])
  return <aside className={`finish-lab ${open ? 'is-open' : ''}`}>
    <button className="finish-lab__handle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="finish-controls"><span className="spark"></span> Make it yours <span className="chev">{open ? '×' : '+'}</span></button>
    <div id="finish-controls" className="finish-lab__controls">
      <p>Try a small piece of the kind of tuning your site can have.</p>
      <label>Accent <input type="color" value={color} onChange={e => setColor(e.target.value)} /></label>
      <label>Surface translucency <output>{opacity}%</output><input type="range" min="65" max="100" value={opacity} onChange={e => setOpacity(Number(e.target.value))} /></label>
      <label>Refraction <output>{bend}</output><input type="range" min="0" max="18" value={bend} onChange={e => setBend(Number(e.target.value))} /></label>
      <small>These are interface details—not a template. Every build starts with the job your site needs to do.</small>
    </div>
  </aside>
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { setMeta(page); window.scrollTo({ top: 0, behavior: 'smooth' }) }, [page])
  const go = (next: Page) => { setPage(next); setMenuOpen(false) }
  return <div className="app-shell">
    <header className="site-header"><button className="brand" onClick={() => go('home')} aria-label="Roas Rye Development home"><span>RR</span><i>Roas Rye<br/>Development</i></button>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><i/><i/></button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Primary navigation">{nav.map(item => <button className={page === item.page ? 'active' : ''} key={item.page} onClick={() => go(item.page)}>{item.label}</button>)}<button className="nav-quote" onClick={() => go('contact')}>Get a quote <span>↗</span></button></nav>
    </header>
    <main>
      {page === 'home' && <Home go={go} />}
      {page === 'work' && <Work go={go} />}
      {page === 'services' && <Services go={go} />}
      {page === 'contact' && <Contact />}
    </main>
    <footer><span>© {new Date().getFullYear()} Roas Rye Development</span><button onClick={() => go('contact')}>Start a project <span>↗</span></button></footer>
    <FinishLab />
  </div>
}

function Home({ go }: { go: (p: Page) => void }) { return <>
  <section className="hero"><div className="hero__eyebrow"><span>Independent web design & development</span><i>01—04</i></div><div className="hero__copy"><h1>Your business has a <em>job</em> to do.<br/>Your website should help.</h1><p>Roas Rye Development makes custom websites for local businesses—built around the actions your customers need to take.</p><button className="button button--primary" onClick={() => go('contact')}>Tell me about your project <span>↗</span></button></div><div className="hero__art"><div className="orbit orbit--one"/><div className="orbit orbit--two"/><div className="hero__stamp">CUSTOM<br/>CODED<br/><b>FOR YOU</b></div><p>Scroll to explore <span>↓</span></p></div></section>
  <section className="intro section-pad"><p className="kicker">Less vague. More useful.</p><h2>A site that makes the next step feel obvious.</h2><div className="intro__grid"><p>Someone finds you from an Instagram post, a recommendation, or a quick search. Your site gives them the basics, answers the important questions, and helps them reach out, book, visit, or buy.</p><button className="text-link" onClick={() => go('services')}>See what can be built <span>↗</span></button></div></section>
  <section className="work-strip section-pad"><div className="section-heading"><p className="kicker">A few directions</p><h2>Built for the way local businesses actually get chosen.</h2><button className="text-link" onClick={() => go('work')}>View all demos <span>↗</span></button></div><div className="preview-grid">{demos.map(demo => <article className="preview-card" key={demo.slug}><BrowserPreview type={demo.slug}/><div><p>Portfolio demo / {demo.title}</p><h3>{demo.action}</h3></div></article>)}</div></section>
  <section className="process section-pad"><p className="kicker">How it works</p><div className="process__grid">{[['01','Start with the real job','We talk through your business, your customers, and the action the site needs to support.'],['02','Shape the site','I turn that into a custom direction, pages, and useful features—not a one-size-fits-all template.'],['03','Put it to work','You get a site that explains the offer clearly and gives people a practical next move.']].map(([num,title,body]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
  <section className="faq section-pad"><p className="kicker">Questions people ask first</p><h2>Clear answers before we start.</h2><details open><summary>Can you build something other than a brochure site?<span>+</span></summary><p>Yes. The scope can include multi-page sites, customer inquiry flows, booking or service information, AI integrations, and other web features that fit your business.</p></details><details><summary>Will it look like every other local business site?<span>+</span></summary><p>No. The point of custom code is to shape the layout, feel, and customer path around your business—not force your business into a template.</p></details><details><summary>What do I need before reaching out?<span>+</span></summary><p>A rough idea is enough. Tell me what your business does, what customers should be able to do online, and anything you already have in mind.</p></details><button className="button button--dark" onClick={() => go('contact')}>Start with a quick note <span>↗</span></button></section>
  </> }

function Work({ go }: { go: (p: Page) => void }) { return <section className="work-page section-pad"><p className="kicker">Selected directions</p><h1>Three ways a site can pull its weight.</h1><p className="page-lead">These are portfolio demos: custom visual directions for different kinds of local business. Live links will appear here once they are supplied.</p><div className="work-list">{demos.map((demo, i) => <article className="work-entry" key={demo.slug}><div className="work-entry__meta"><p>0{i + 1} / Portfolio demo</p><h2>{demo.title}</h2><p>{demo.audience}</p><div><b>Customer action</b><span>{demo.action}</span></div></div><BrowserPreview type={demo.slug}/></article>)}</div><section className="work-cta"><p className="kicker">Your direction</p><h2>Let’s make the next one feel like your business.</h2><button className="button button--primary" onClick={() => go('contact')}>Talk about a project <span>↗</span></button></section></section> }

function Services({ go }: { go: (p: Page) => void }) { return <section className="services section-pad"><p className="kicker">Services & pricing</p><h1>Choose the level that fits where you are now.</h1><p className="page-lead">Every option is custom coded around your business. If your needs are outside these packages, send a note with what you have in mind.</p><div className="pricing-grid">{tiers.map((tier, i) => <article className={`price-card ${i === 1 ? 'featured' : ''}`} key={tier.name}>{i === 1 && <span className="tag">Most flexible</span>}<p>{tier.name}</p><h2>{tier.price}</h2><small>{tier.note}</small><p className="price-card__intro">{tier.intro}</p><ul>{tier.items.map(item => <li key={item}><span></span>{item}</li>)}</ul><button className="button button--outline" onClick={() => go('contact')}>Ask about {tier.name} <span>↗</span></button></article>)}</div><section className="service-notes"><article><span>01</span><h2>What you can ask for</h2><p>Custom websites, multi-page setups, customer inquiry paths, AI-enabled features, search-ready foundations, hosting, and ongoing adjustments when included in your plan.</p></article><article><span>02</span><h2>What “custom” means here</h2><p>The page structure, writing direction, and interface are made for your offer and your customers. It does not mean unlimited scope; larger changes are reviewed against the project.</p></article></section></section> }

function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error' | 'unconfigured'>('idle')
  const [error, setError] = useState('')
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = event.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }
    if (!formEndpoint && !contactEmail) { setStatus('unconfigured'); return }
    const data = new FormData(form)
    if (formEndpoint) { setStatus('loading'); setError(''); try { const response = await fetch(formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } }); if (!response.ok) throw new Error('The form provider did not accept the request.'); setStatus('sent'); form.reset() } catch (err) { setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.'); setStatus('error') } return }
    const subject = encodeURIComponent(`Project inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nBusiness: ${data.get('business')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nWebsite: ${data.get('website') || 'Not provided'}\n\nWhat they need:\n${data.get('message')}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }
  return <section className="contact section-pad"><div className="contact__intro"><p className="kicker">Start a project</p><h1>What could a better website help your business do?</h1><p>Tell me a little about where you are and what you want customers to be able to do online.</p><div className="contact-shape"><span>RR</span><i>LET’S<br/>MAKE<br/>SOMETHING</i></div></div><form onSubmit={submit} noValidate><div className="form-row"><label>Your name<input name="name" required autoComplete="name" /></label><label>Business name<input name="business" required autoComplete="organization" /></label></div><label>Email<input name="email" type="email" required autoComplete="email" /></label><div className="form-row"><label>Current website <small>Optional</small><input name="website" type="url" placeholder="https://" autoComplete="url" /></label><label>Phone <small>Optional</small><input name="phone" type="tel" autoComplete="tel" /></label></div><label>What do you need?<textarea name="message" required rows={6} placeholder="A new site, an update, a better way for customers to reach you…" /></label><button className="button button--primary" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send project note'} <span>↗</span></button>{status === 'sent' && <p className="form-message success" role="status">Thanks—your note was sent.</p>}{status === 'error' && <p className="form-message error" role="alert">{error}</p>}{status === 'unconfigured' && <p className="form-message pending" role="status">Lead capture is not configured yet. Please check back once a contact email or form provider has been added.</p>}</form></section>
}

export default App

