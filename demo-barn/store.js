// Product photos, names and example prices are referenced from the linked retailer pages.
const products = [
  {id:'1344184',brand:'Purina',name:'Meat Bird Non-Medicated Crumbles Chicken Feed, 40 lb. Bag',category:'Feed & poultry',price:25.99,source:'https://www.tractorsupply.com/tsc/brand/Purina/poultry/f/Shop%20now%21'},
  {id:'2306264',brand:'Carhartt',name:"Men's Firm Duck Flat Brim Cap",category:'Workwear',price:27.99,source:'https://www.tractorsupply.com/tsc/product/carhartt-firm-duck-flat-brim-cap-2306264'},
  {id:'1043962',brand:'Manna Pro',name:'Poultry Grit with Probiotics, 25 lb.',category:'Feed & poultry',price:15.99,source:'https://www.tractorsupply.com/tsc/brand/Manna%2BPro/poultry'},
  {id:'2409006',brand:'KONG',name:'Classic Dog Toy, Large',category:'Pet',price:14.99,source:'https://www.tractorsupply.com/tsc/product/kong-classic-2409006'},
  {id:'7520899',brand:'Carhartt',name:"Men's Acrylic Knit Beanie Winter Hat",category:'Workwear',price:19.99,source:'https://www.tractorsupply.com/tsc/product/carhartt-acrylic-knit-hat-7520899'},
]
const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n)
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
  if (sort.value === 'low') shown.sort((a,b) => a.price-b.price)
  if (sort.value === 'high') shown.sort((a,b) => b.price-a.price)
  if (sort.value === 'name') shown.sort((a,b) => a.name.localeCompare(b.name))
  count.textContent = `${shown.length} ${shown.length === 1 ? 'item' : 'items'}`
  empty.hidden = shown.length !== 0
  grid.innerHTML = shown.map(p => `<article class="product-card"><div class="product-image"><img src="./assets/${p.id}.jpg" width="600" height="600" alt="${p.brand} ${p.name}" loading="lazy"></div><p class="product-category">${p.category} / ${p.brand}</p><h3>${p.name}</h3><p class="price">${money(p.price)}</p><a class="source-link" href="${p.source}" target="_blank" rel="noopener noreferrer">View product source</a><button class="add-cart" type="button" data-add="${p.id}" aria-label="Add ${p.brand} ${p.name} to demo cart">Add to cart</button></article>`).join('')
}
function renderCart() {
  const selected = products.filter(p => cart[p.id])
  const total = selected.reduce((sum,p) => sum + p.price * cart[p.id],0)
  document.querySelector('.cart-count').textContent = selected.reduce((sum,p) => sum + cart[p.id],0)
  document.querySelector('#subtotal').textContent = money(total)
  document.querySelector('#checkout-total').textContent = money(total)
  checkout.disabled = !selected.length
  cartItems.innerHTML = selected.length ? selected.map(p => `<article class="cart-item"><img src="./assets/${p.id}.jpg" alt=""><div><h3>${p.brand} ${p.name}</h3><p>${money(p.price)}</p><div class="quantity"><button type="button" data-action="minus" data-id="${p.id}" aria-label="Remove one ${p.name}">−</button><span aria-label="Quantity">${cart[p.id]}</span><button type="button" data-action="plus" data-id="${p.id}" aria-label="Add one ${p.name}">+</button><button type="button" class="remove" data-action="remove" data-id="${p.id}">Remove</button></div></div></article>`).join('') : '<p class="cart-empty">Your cart is empty. Take a look around the shelves.</p>'
  try { sessionStorage.setItem('barn-demo-cart',JSON.stringify(cart)) } catch {}
}
function openCart() { drawer.hidden = false; backdrop.hidden = false; drawer.setAttribute('aria-hidden','false'); cartButton.setAttribute('aria-expanded','true'); document.querySelector('.close-cart').focus() }
function closeCart() { drawer.hidden = true; backdrop.hidden = true; drawer.setAttribute('aria-hidden','true'); cartButton.setAttribute('aria-expanded','false'); cartButton.focus() }
grid.addEventListener('click',event => { const button=event.target.closest('[data-add]'); if(!button) return; cart[button.dataset.add] = Math.min((cart[button.dataset.add] || 0)+1,99); renderCart(); openCart() })
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
renderProducts(); renderCart()

