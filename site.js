const contactEmail = ''
// Web3Forms access keys are public form identifiers, not secret API credentials.
const web3FormsAccessKey = 'af037755-3ca1-49dd-9f28-0105ea5ff166'
const formEndpoint = web3FormsAccessKey ? 'https://api.web3forms.com/submit' : ''
const pageTitles = { home: 'Roas Rye Development — Custom websites for local business', work: 'Work — Roas Rye Development', services: 'Services & pricing — Roas Rye Development', contact: 'Start a project — Roas Rye Development', direct: 'Direct contact — Roas Rye Development' }
document.querySelector('[data-view="direct"]').dataset.view = 'contact'
document.querySelector('nav [data-route="contact"]').remove()
document.querySelector('.nav-quote').innerHTML = 'Contact <span>↗</span>'
const views = [...document.querySelectorAll('[data-view]')]
const nav = [...document.querySelectorAll('[data-route]')]
const menuButton = document.querySelector('.menu-button')
const siteNav = document.querySelector('.site-header nav')
function route() { const next = location.hash.slice(1); const page = next === 'direct' ? 'contact' : Object.hasOwn(pageTitles, next) ? next : 'home'; views.forEach((view) => { view.hidden = view.dataset.view !== page }); nav.forEach((item) => item.classList.toggle('active', item.dataset.route === page)); document.title = pageTitles[page]; siteNav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); window.scrollTo({ top: 0, behavior: 'instant' }) }
addEventListener('hashchange', route); route()
menuButton.addEventListener('click', () => { const open = siteNav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)) })
const lab = document.querySelector('.finish-lab'); const labButton = document.querySelector('.finish-lab__handle'); labButton.addEventListener('click', () => { const open = lab.classList.toggle('is-open'); labButton.setAttribute('aria-expanded', String(open)); labButton.querySelector('.chev').textContent = open ? '×' : '+' })
const root = document.documentElement
document.querySelector('#accent-control').addEventListener('input', (event) => root.style.setProperty('--accent', event.target.value))
document.querySelector('#opacity-control').addEventListener('input', (event) => { root.style.setProperty('--panel-opacity', `${event.target.value}%`); document.querySelector('#opacity-output').textContent = `${event.target.value}%` })
document.querySelector('#bend-control').addEventListener('input', (event) => { root.style.setProperty('--bend', `${event.target.value}px`); document.querySelector('#bend-output').textContent = event.target.value })
const form = document.querySelector('#contact-form'); const message = document.querySelector('#form-message')
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  if (!form.checkValidity()) { form.reportValidity(); return }
  if (!formEndpoint && !contactEmail) { message.textContent = 'Lead capture is not configured yet. Please check back once a contact email or form provider has been added.'; message.className = 'form-message pending'; return }
  const submitButton = form.querySelector('button[type="submit"]')
  const data = new FormData(form)
  if (formEndpoint) {
    data.set('access_key', web3FormsAccessKey)
    data.set('subject', 'New Roas Rye Development project inquiry')
    data.set('from_name', 'Roas Rye Development website')
    submitButton.disabled = true; submitButton.textContent = 'Sending…'; message.textContent = ''
    try {
      const response = await fetch(formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      const result = await response.json()
      if (!response.ok || result.success !== true) throw new Error('Submission was not accepted')
      form.reset(); message.textContent = 'Thanks—your project note was sent.'; message.className = 'form-message success'
    } catch { message.textContent = 'Your note could not be sent. Please try again, or use the call or text option below.'; message.className = 'form-message error' }
    finally { submitButton.disabled = false; submitButton.innerHTML = 'Send project note <span>↗</span>' }
    return
  }
  const subject = encodeURIComponent(`Project inquiry from ${data.get('name')}`)
  const body = encodeURIComponent(`Name: ${data.get('name')}\nBusiness: ${data.get('business')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nWebsite: ${data.get('website') || 'Not provided'}\n\nWhat they need:\n${data.get('message')}`)
  location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
})
