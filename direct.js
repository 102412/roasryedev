(() => {
  const heading = document.querySelector('.direct-intro h1')
  const subheading = document.createElement('h2')
  subheading.textContent = heading.textContent
  heading.replaceWith(subheading)
  const intro = document.querySelector('.contact__intro')
  const link = document.createElement('a')
  link.className = 'button button--dark direct-link'
  link.href = 'tel:+15023437977'
  link.textContent = 'Call (502) 343-7977 ↗'
  intro.insertBefore(link, intro.querySelector('.contact-shape'))
})()

