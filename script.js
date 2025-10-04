// === МАССИВ ТОВАРОВ ===
// Можно менять названия, цены и ссылки на изображения
const products = [
  { id: 1, name: "Футболка Classic", category: "men", price: 8900, image: "https://share.google/images/5Y4yjUj5xxf6b4jFs" },
  { id: 2, name: "Худи Oversize", category: "men", price: 14900, image: "https://share.google/images/Dx3jP5fggGFWaWoCM" },
  { id: 3, name: "Джинсы Slim Fit", category: "men", price: 17900, image: "https://share.google/images/g4B1qYa0MdebrtyeH" },
  { id: 4, name: "Поло Premium", category: "men", price: 9900, image: "https://share.google/images/qec7NBSc1Omk5i6YO" },
  { id: 5, name: "Куртка Street", category: "men", price: 24900, image: "https://share.google/images/aTmZ8qm1F65vBpuCf" },
  { id: 6, name: "Шорты Sport", category: "men", price: 7900, image: "https://share.google/images/lih6LwlgAF6hS22PO" },

  { id: 7, name: "Платье Summer", category: "women", price: 18900, image: "https://share.google/images/zIauVjrFacbO3O0rN" },
  { id: 8, name: "Блузка Air", category: "women", price: 11900, image: "https://share.google/images/gxlGWmQBGbMQhrlh2" },
  { id: 9, name: "Юбка Denim", category: "women", price: 13900, image: "https://share.google/images/HSgqYc2wcK5M94V88" },
  { id: 10, name: "Куртка Leather", category: "women", price: 25900, image: "https://share.google/images/UvOWB0RN12nW0tYZR" },
  { id: 11, name: "Брюки Classic", category: "women", price: 14900, image: "https://share.google/images/i8Ulzwruo5PAKZmp9" },
  { id: 12, name: "Топ Silk", category: "women", price: 7900, image: "https://share.google/images/sR8eLbTndP5QoiEDM" },

  { id: 13, name: "Кепка Logo", category: "accessories", price: 5900, image: "https://share.google/images/mAN4AdUaLlnCx4u1s" },
  { id: 14, name: "Рюкзак Urban", category: "accessories", price: 17900, image: "https://share.google/images/Mx51SdntK3xn56JGN" },
  { id: 15, name: "Очки Retro", category: "accessories", price: 12900, image: "https://share.google/images/7pxCNm0es4tsEqcPA" },
  { id: 16, name: "Ремень Classic", category: "accessories", price: 8900, image: "https://share.google/images/M10okMzG1unvkN3NH" },
  { id: 17, name: "Сумка City", category: "accessories", price: 15900, image: "https://share.google/images/2abNlK2RYTLWoIvy9" },
  { id: 18, name: "Часы Minimal", category: "accessories", price: 25900, image: "https://share.google/images/XpODNLdn2hDQGh7xH" },

  { id: 19, name: "Футболка Sport", category: "men", price: 8900, image: "https://share.google/images/XQ7BQU8y4Lz9uBfBm" },
  { id: 20, name: "Толстовка Logo", category: "men", price: 13900, image: "https://share.google/images/TBU4EefQExHyq69KR" },
  { id: 21, name: "Платье Evening", category: "women", price: 22900, image: "https://share.google/images/t4MPo8b72Se2gbkSv" },
  { id: 22, name: "Юбка Office", category: "women", price: 11900, image: "https://share.google/images/Ntjjg4vTpF0j9axbf" },
  { id: 23, name: "Сумка Leather", category: "accessories", price: 18900, image: "https://share.google/images/rdWfvyqFCthPRTq1w" },
  { id: 24, name: "Браслет Silver", category: "accessories", price: 9900, image: "https://share.google/images/khnVJ0VINklAGWLHx" },
  { id: 25, name: "Кроссовки Street", category: "men", price: 29900, image: "https://share.google/images/Q21k4ZPVGoxUukMITe" },
  { id: 26, name: "Кеды White", category: "men", price: 21900, image: "https://share.google/images/p3qsNsWwUBgDIeZwD" },
  { id: 27, name: "Пальто Elegant", category: "women", price: 28900, image: "https://share.google/images/7aL4Mi3pCfXvlJQDb" },
  { id: 28, name: "Шляпа Beach", category: "accessories", price: 7900, image: "https://share.google/images/Bbg0PfGBVWGViCmmn" },
  { id: 29, name: "Свитер Warm", category: "men", price: 16900, image: "https://share.google/images/HPzdZLC77M8zXFzVP" },
  { id: 30, name: "Серьги Gold", category: "accessories", price: 13900, image: "https://share.google/images/qPakZy02GmNzJhANt" }
];

// === ОТОБРАЖЕНИЕ ТОВАРОВ ===
function renderProducts(list = products) {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = list.map(item => `
    <div class="product-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p><b>${item.price.toLocaleString()} ₸</b></p>
      <button onclick="addToCart(${item.id})">Добавить в корзину</button>
    </div>
  `).join("");
}
renderProducts();

// === ФИЛЬТР ===
function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  if (category === "all") {
    renderProducts(products);
  } else {
    renderProducts(products.filter(p => p.category === category));
  }
}

// === ЛОКАЛЬНОЕ ХРАНИЛИЩЕ ===
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// === ДОБАВЛЕНИЕ В КОРЗИНУ ===
function addToCart(id) {
  const cart = getCart();
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart(cart);
  updateCartCount();
  showCartPopup();
}

// === ОБНОВЛЕНИЕ СЧЁТЧИКА ===
function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.textContent = count;
}
updateCartCount();

// === ВСПЛЫВАЮЩАЯ КОРЗИНА ===
function showCartPopup() {
  const popup = document.getElementById("cart-popup");
  const list = document.getElementById("cart-popup-items");
  const totalEl = document.getElementById("cart-popup-total");

  const cart = getCart();
  if (!popup || !list) return;

  if (cart.length === 0) {
    list.innerHTML = "<p>Корзина пуста</p>";
    totalEl.textContent = "0 ₸";
  } else {
    list.innerHTML = cart.map(i => `
      <div class="cart-popup-item">
        <span>${i.name}</span>
        <span>${i.qty} × ${i.price.toLocaleString()} ₸</span>
      </div>
    `).join("");
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    totalEl.textContent = total.toLocaleString() + " ₸";
  }

  popup.classList.remove("hidden");
}
function closeCart() {
  document.getElementById("cart-popup").classList.add("hidden");
}
function goToCart() {
  window.location.href = "cart.html";
}

// === СТРАНИЦА КОРЗИНЫ ===
function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = "<p>Корзина пуста.</p>";
    document.getElementById("cart-total").textContent = "0 ₸";
    return;
  }

  container.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.image}" alt="${i.name}">
      <h4>${i.name}</h4>
      <p>${i.price.toLocaleString()} ₸ × 
        <input type="number" value="${i.qty}" min="1" onchange="changeQty(${i.id}, this.value)">
      </p>
      <button onclick="removeItem(${i.id})">❌</button>
    </div>
  `).join("");

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cart-total").textContent = total.toLocaleString() + " ₸";
}
renderCart();

function changeQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty = Math.max(1, parseInt(qty));
  saveCart(cart);
  renderCart();
}
function removeItem(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
}
function checkout() {
  const cart = getCart();
  if (cart.length === 0) return alert("Корзина пуста!");
  alert("✅ Заказ оформлен!");
  localStorage.removeItem("cart");
  window.location.href = "checkout.html";
}