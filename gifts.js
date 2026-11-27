(() => {
  const scene = document.querySelector('.winter-scene')
  const offers = [
    { name: 'Basic', price: '$179.99', terms: 'One-time build', copy: 'A fully custom-coded website, basic SEO, and built-in AI—packaged for you to take with you.' },
    { name: 'Pro', price: '$234.99', terms: 'Build fee + $15/month', copy: 'A multi-page custom website with AI integration, hosting, and ongoing SEO.' },
    { name: 'Advanced', price: '$400', terms: 'Build fee + $20/year', copy: 'Expanded AI and revisions. Hosting and a custom domain are optional for an additional $10/month, subject to domain availability and price.' },
  ]
  scene.innerHTML = `<div class="gift-sky" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div><p class="scene-caption">A little something for your business <span></span></p><div class="gift-floor" aria-hidden="true"></div><div class="gift-stack" aria-label="Three gifts containing pricing options">${offers.map((offer, index) => `<button type="button" class="gift gift-${index+1}" aria-label="Open ${offer.name} pricing gift" aria-expanded="false"><span class="gift-side" aria-hidden="true"></span><span class="gift-front" aria-hidden="true"><span class="gift-pattern"></span><span class="gift-band"></span><span class="gift-tag">0${index+1}<i></i></span></span><span class="gift-lid" aria-hidden="true"><span class="lid-top"></span><span class="lid-front"></span><span class="lid-side"></span><span class="lid-band"></span><span class="bow bow-left"></span><span class="bow bow-right"></span><span class="bow-knot"></span></span><span class="gift-shadow" aria-hidden="true"></span></button>`).join('')}</div><p class="gift-hint">Choose a gift to unwrap an offer <span>↗</span></p><article class="gift-card" hidden tabindex="-1"><button class="gift-close" type="button" aria-label="Close offer">×</button><span class="gift-card-spark" aria-hidden="true"></span><p class="kicker">A little something for you</p><h3></h3><p class="gift-price"></p><p class="gift-terms"></p><p class="gift-copy"></p><a href="/services/">Explore the details <span>↗</span></a></article>`
  const gifts = [...scene.querySelectorAll('.gift')]
  const card = scene.querySelector('.gift-card')
  let timer
  let active = null
  function closeCard() { clearTimeout(timer); card.hidden = true; gifts.forEach(gift => { gift.classList.remove('opening'); gift.setAttribute('aria-expanded','false') }); if (active) active.focus(); active = null }
  gifts.forEach((gift,index) => gift.addEventListener('click', () => {
    clearTimeout(timer); card.hidden = true
    gifts.forEach(other => { other.classList.remove('opening'); other.setAttribute('aria-expanded','false') })
    active = gift; gift.classList.add('opening'); gift.setAttribute('aria-expanded','true')
    const offer = offers[index]
    card.querySelector('h3').textContent = offer.name
    card.querySelector('.gift-price').textContent = offer.price
    card.querySelector('.gift-terms').textContent = offer.terms
    card.querySelector('.gift-copy').textContent = offer.copy
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    timer = setTimeout(() => { card.hidden = false; card.focus() }, reducedMotion ? 0 : 700)
  }))
  scene.querySelector('.gift-close').addEventListener('click', closeCard)
  card.querySelector('a').addEventListener('click', closeCard)
  scene.addEventListener('keydown', event => { if (event.key === 'Escape' && active) closeCard() })

  const advanced = document.querySelector('#finish-controls details')
  const giftControls = document.createElement('div')
  giftControls.className = 'gift-controls'
  giftControls.innerHTML = `<p>Gift colors</p>${[['Gift 1 wrap','--gift-1-wrap','#b44838'],['Gift 1 ribbon','--gift-1-ribbon','#ead7a6'],['Gift 2 wrap','--gift-2-wrap','#355c4c'],['Gift 2 ribbon','--gift-2-ribbon','#e9c8a1'],['Gift 3 wrap','--gift-3-wrap','#c6b59b'],['Gift 3 ribbon','--gift-3-ribbon','#b44838'],['Gift patterns & tags','--gift-detail','#f5f0e8']].map(([label,variable,value]) => `<label>${label}<input type="color" value="${value}" data-gift-color="${variable}"></label>`).join('')}`
  advanced.append(giftControls)
  giftControls.querySelectorAll('input').forEach(input => input.addEventListener('input', () => document.documentElement.style.setProperty(input.dataset.giftColor,input.value)))
})()

