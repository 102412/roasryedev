(() => {
  const nav = document.querySelector('.site-header nav')
  const link = document.createElement('a')
  link.href = '#direct'; link.dataset.route = 'direct'; link.textContent = 'Direct contact'
  nav.insertBefore(link, nav.querySelector('.nav-quote'))
  const contactIntro = document.querySelector('.contact__intro')
  const directLink = document.createElement('a')
  directLink.href = '#direct'; directLink.className = 'text-link direct-link'; directLink.textContent = 'Prefer to call or text? Open direct contact ↗'
  contactIntro.insertBefore(directLink, contactIntro.querySelector('.contact-shape'))
  const form = document.querySelector('#vault-form')
  const input = document.querySelector('#visitor-phone')
  const error = document.querySelector('#phone-error')
  const reveal = document.querySelector('.vault-reveal')
  const panel = document.querySelector('.vault-panel')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const digits = input.value.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 15) { error.textContent = 'Enter a valid phone number with 10 to 15 digits.'; input.setAttribute('aria-invalid','true'); input.focus(); return }
    error.textContent = ''; input.removeAttribute('aria-invalid'); form.hidden = true; panel.classList.add('is-open'); reveal.hidden = false; reveal.focus()
  })
  document.querySelector('.vault-lock').addEventListener('click', () => { reveal.hidden = true; panel.classList.remove('is-open'); form.hidden = false; input.focus() })
  addEventListener('hashchange', () => { if (location.hash !== '#direct') { form.reset(); form.hidden = false; reveal.hidden = true; panel.classList.remove('is-open'); error.textContent = ''; input.removeAttribute('aria-invalid') } })
})()
