// Product photos, names and example prices are referenced from the linked retailer pages.
const products = [
  {id:'1344184',brand:'Purina',name:'Meat Bird Non-Medicated Crumbles Chicken Feed, 40 lb. Bag',category:'Feed & poultry',price:25.99,salePrice:22.09,deal:'Black Friday demo deal',source:'https://www.tractorsupply.com/tsc/brand/Purina/poultry/f/Shop%20now%21'},
  {id:'2306264',brand:'Carhartt',name:"Men's Firm Duck Flat Brim Cap",category:'Workwear',price:27.99,salePrice:22.39,deal:'Black Friday demo deal',source:'https://www.tractorsupply.com/tsc/product/carhartt-firm-duck-flat-brim-cap-2306264'},
  {id:'1043962',brand:'Manna Pro',name:'Poultry Grit with Probiotics, 25 lb.',category:'Feed & poultry',price:15.99,source:'https://www.tractorsupply.com/tsc/brand/Manna%2BPro/poultry'},
  {id:'2409006',brand:'KONG',name:'Classic Dog Toy, Large',category:'Pet',price:14.99,salePrice:11.99,deal:'Holiday demo deal',source:'https://www.tractorsupply.com/tsc/product/kong-classic-2409006'},
  {id:'7520899',brand:'Carhartt',name:"Men's Acrylic Knit Beanie Winter Hat",category:'Workwear',price:19.99,source:'https://www.tractorsupply.com/tsc/product/carhartt-acrylic-knit-hat-7520899'},
  {"id": "2061535", "brand": "Standlee", "name": "Alfalfa Forage Bites Very Berry Horse Treats, 5 lb.", "category": "Horse", "price": 12.99, "source": "https://www.tractorsupply.com/tsc/product/standlee-alfalfa-forage-bites-very-berry-flavor-1175-41012-0-0-2061535"},
  {"id": "1336641", "brand": "DuMOR", "name": "Baker’s Bites Baked Molasses Horse Treats, 4 lb.", "category": "Horse", "price": 7.49, "source": "https://www.tractorsupply.com/tsc/product/dumor-dumor-baked-molasses-bakers-bites-4-lb-1336641"},
  {"id": "5023956", "brand": "Manna Pro", "name": "Apple Flavor Wafer Horse Treats, 20 lb.", "category": "Horse", "price": 22.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-apple-wafers-20-lb-5023956"},
  {"id": "1256813", "brand": "Manna Pro", "name": "Nutrigood Low Sugar Apple Horse Treats, 4 lb.", "category": "Horse", "price": 16.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-nutrigood-low-sugar-apple-treats-4-lb-1256813"},
  {"id": "1336640", "brand": "DuMOR", "name": "Baker’s Bites Baked Peppermint Horse Treats, 4 lb.", "category": "Horse", "price": 7.49, "source": "https://www.tractorsupply.com/tsc/product/dumor-dumor-baked-peppermint-bakers-bites-4-lb-1336640", "salePrice": 5.99, "deal": "Holiday demo deal"},
  {"id": "2525030", "brand": "Manna Pro", "name": "Oyster Shell Poultry Treats, 50 lb.", "category": "Feed & poultry", "price": 17.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-oyster-shell-50-lb-2525030", "salePrice": 15.29, "deal": "Holiday demo deal"},
  {"id": "1246046", "brand": "Manna Pro", "name": "Hen Healer Ointment, 2 oz.", "category": "Feed & poultry", "price": 11.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-mp-hen-healer-ointment-2-oz-1000216-1246046"},
  {"id": "1014698", "brand": "Manna Pro", "name": "Poultry Protector Coop Bug Spray, 16 oz.", "category": "Feed & poultry", "price": 17.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-poultry-protector-16-oz-1014698"},
  {"id": "1312768", "brand": "Manna Pro", "name": "Hydro Hen Drinking Water Supplement, 8 oz.", "category": "Feed & poultry", "price": 11.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-hydro-hen-8-oz-1030209-1312768"},
  {"id": "1025907", "brand": "Manna Pro", "name": "Coop-N-Compost Odor Neutralizer, 1.75 lb.", "category": "Feed & poultry", "price": 12.99, "source": "https://www.tractorsupply.com/tsc/product/manna-pro-coop-n-compost-175-lb-1025907"},
  {"id": "1654948", "brand": "Royal Wing", "name": "Total Care Gourmet Wildlife Food, 14 lb.", "category": "Bird & wildlife", "price": 35.99, "source": "https://www.tractorsupply.com/tsc/product/royal-wing-total-care-wildlife-supreme-with-vegetables-wildlife-food-14-lb-1654948"},
  {"id": "1654947", "brand": "Royal Wing", "name": "Total Care No Waste Big Bites Wild Bird Food, 5 lb.", "category": "Bird & wildlife", "price": 15.49, "source": "https://www.tractorsupply.com/tsc/product/royal-wing-total-care-no-waste-big-bites-wild-bird-food-5-lb-1654947", "salePrice": 12.39, "deal": "Holiday demo deal"},
  {"id": "1654946", "brand": "Royal Wing", "name": "Total Care No Waste Chopped Blend Wild Bird Food, 5 lb.", "category": "Bird & wildlife", "price": 15.99, "source": "https://www.tractorsupply.com/tsc/product/royal-wing-total-care-no-waste-chopped-blend-5-lb-1654946"},
  {"id": "6860856", "brand": "Royal Wing", "name": "Select Finch Mix Wild Bird Food, 10 lb.", "category": "Bird & wildlife", "price": 20.99, "source": "https://www.tractorsupply.com/tsc/product/royal-wing-select-finch-mix-wild-bird-food-10-lb-6860856"},
  {"id": "1363587", "brand": "Royal Wing", "name": "Total Care Gourmet High-Protein Wild Bird Food, 5.5 lb.", "category": "Bird & wildlife", "price": 13.99, "source": "https://www.tractorsupply.com/tsc/product/royal-wing-total-care-total-care-high-protein-mix-with-suet-pellets-55-lb-1363587"},
]
const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n)
const priceOf = p => p.salePrice ?? p.price
const priceMarkup = p => p.salePrice ? `<span class="sale-label">${p.deal}</span><span class="sale-price">Demo ${money(p.salePrice)}</span> <del>${money(p.price)}</del>` : money(p.price)
const grid = document.querySelector('#products')
const count = document.querySelector('#result-count')
const empty = document.querySelector('#no-results')
const search = document.querySelector('#search')
const sort = document.querySelector('#sort')
const radios = [...document.querySelectorAll('[name=category]')]
const drawer = document.querySelector('#cart-drawer')
const backdrop = document.querySelector('.drawer-backdrop')
const cartButton = document.querySelector('.cart-toggle')
const cartItems = document.querySelector('#cart-items')
const checkout = document.querySelector('#checkout')
const checkoutDialog = document.querySelector('#checkout-dialog')
let cart = {}
try { const saved = JSON.parse(sessionStorage.getItem('barn-demo-cart') || '{}'); for (const p of products) if (Number.isInteger(saved[p.id]) && saved[p.id] > 0) cart[p.id] = Math.min(saved[p.id], 99) } catch {}

function renderProducts() {
  const term = search.value.trim().toLowerCase()
  const category = radios.find(radio => radio.checked)?.value || 'All'
  const shown = products.filter(p => (category === 'All' || p.category === category) && (p.name+' '+p.brand+' '+p.category).toLowerCase().includes(term))
  if (sort.value === 'low') shown.sort((a,b) => priceOf(a)-priceOf(b))
  if (sort.value === 'high') shown.sort((a,b) => priceOf(b)-priceOf(a))
  if (sort.value === 'name') shown.sort((a,b) => a.name.localeCompare(b.name))
  count.textContent = `${shown.length} ${shown.length === 1 ? 'item' : 'items'}`
  empty.hidden = shown.length !== 0
  grid.innerHTML = shown.map(p => `<article class="product-card"><div class="product-image"><img src="./assets/${p.id}.jpg" width="600" height="600" alt="${p.brand} ${p.name}" loading="lazy"></div><p class="product-category">${p.category} / ${p.brand}</p><h3>${p.name}</h3><p class="price">${priceMarkup(p)}</p><a class="source-link" href="${p.source}" target="_blank" rel="noopener noreferrer">View product source</a><button class="add-cart" type="button" data-add="${p.id}" aria-label="Add ${p.brand} ${p.name} to demo cart">Add to cart</button></article>`).join('')
}
function renderCart() {
  const selected = products.filter(p => cart[p.id])
  const total = selected.reduce((sum,p) => sum + priceOf(p) * cart[p.id],0)
  document.querySelector('.cart-count').textContent = selected.reduce((sum,p) => sum + cart[p.id],0)
  document.querySelector('#subtotal').textContent = money(total)
  document.querySelector('#checkout-total').textContent = money(total)
  checkout.disabled = !selected.length
  cartItems.innerHTML = selected.length ? selected.map(p => `<article class="cart-item"><img src="./assets/${p.id}.jpg" alt=""><div><h3>${p.brand} ${p.name}</h3><p>${p.salePrice ? 'Demo deal: ' : ''}${money(priceOf(p))}</p><div class="quantity"><button type="button" data-action="minus" data-id="${p.id}" aria-label="Remove one ${p.name}">−</button><span aria-label="Quantity">${cart[p.id]}</span><button type="button" data-action="plus" data-id="${p.id}" aria-label="Add one ${p.name}">+</button><button type="button" class="remove" data-action="remove" data-id="${p.id}">Remove</button></div></div></article>`).join('') : '<p class="cart-empty">Your cart is empty. Take a look around the shelves.</p>'
  try { sessionStorage.setItem('barn-demo-cart',JSON.stringify(cart)) } catch {}
}
function openCart() { drawer.hidden = false; backdrop.hidden = false; drawer.setAttribute('aria-hidden','false'); cartButton.setAttribute('aria-expanded','true'); document.querySelector('.close-cart').focus() }
function closeCart() { drawer.hidden = true; backdrop.hidden = true; drawer.setAttribute('aria-hidden','true'); cartButton.setAttribute('aria-expanded','false'); cartButton.focus() }
document.querySelector('main').addEventListener('click',event => { const button=event.target.closest('[data-add]'); if(!button) return; cart[button.dataset.add] = Math.min((cart[button.dataset.add] || 0)+1,99); renderCart(); openCart() })
cartItems.addEventListener('click',event => { const button=event.target.closest('[data-action]'); if(!button) return; const id=button.dataset.id; if(button.dataset.action==='remove') delete cart[id]; else if(button.dataset.action==='plus') cart[id]=Math.min(cart[id]+1,99); else { cart[id]--; if(cart[id]<=0) delete cart[id] } renderCart() })
search.addEventListener('input',renderProducts)
sort.addEventListener('change',renderProducts)
radios.forEach(radio => radio.addEventListener('change',renderProducts))
document.querySelector('.clear-filters').addEventListener('click',() => { search.value=''; radios[0].checked=true; sort.value='featured'; renderProducts() })
document.querySelectorAll('[data-nav]').forEach(link => link.addEventListener('click',() => { const selected=radios.find(r => r.value===link.dataset.nav); if(selected) selected.checked=true; search.value=''; renderProducts() }))
cartButton.addEventListener('click',openCart)
document.querySelector('.close-cart').addEventListener('click',closeCart)
backdrop.addEventListener('click',closeCart)
document.addEventListener('keydown',event => { if(event.key==='Escape' && !drawer.hidden && !checkoutDialog.open) closeCart() })
checkout.addEventListener('click',() => { checkoutDialog.showModal() })
document.querySelectorAll('.close-checkout').forEach(button => button.addEventListener('click',() => checkoutDialog.close()))
const featured = ['1344184','2306264','2409006'].map(id => products.find(p => p.id === id))
const showcase = document.querySelector('#featured-product')
const carousel = document.querySelector('.featured')
const pauseButton = document.querySelector('#featured-pause')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let paused = reducedMotion.matches
const featuredNames = ['Meat Bird Feed, 40 lb.', 'Firm Duck Flat Brim Cap', 'Classic Dog Toy, Large']
function featuredSlides() {
  return featured.map((p,i) => `<article class="featured-slide"><img src="./assets/${p.id}-cutout.png" width="600" height="600" alt="${p.brand} ${p.name}"><div class="featured-copy"><span class="featured-kicker">FARM FAVORITE / 0${i + 1}</span><h2>${p.brand} ${featuredNames[i]}</h2><p class="featured-price">${priceMarkup(p)}</p></div></article>`).join('')
}
// The leading copy creates a seamless rightward loop and is hidden from assistive technology.
showcase.innerHTML = `<div class="featured-group" aria-hidden="true">${featuredSlides()}</div><div class="featured-group">${featuredSlides()}</div>`
function updateMotion() {
  carousel.classList.toggle('is-paused', paused)
  pauseButton.textContent = paused ? 'Play motion' : 'Pause motion'
  pauseButton.setAttribute('aria-label', paused ? 'Play featured product motion' : 'Pause featured product motion')
}
// Changing playback rate preserves the current position, avoiding a jump on hover.
function setCarouselSpeed(rate) {
  showcase.getAnimations().forEach(animation => animation.updatePlaybackRate(rate))
}
carousel.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') setCarouselSpeed(0.35) })
carousel.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') setCarouselSpeed(1) })
pauseButton.addEventListener('click', () => { paused = !paused; updateMotion() })
reducedMotion.addEventListener('change', event => { if(event.matches){paused=true;updateMotion()} })
updateMotion(); renderProducts(); renderCart()
