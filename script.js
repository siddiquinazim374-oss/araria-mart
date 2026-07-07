// =====================
// PRODUCTS DATABASE
// =====================
const products = [
    // ----- EXISTING PRODUCTS (ID 1-13) -----
    { id: 1, name: "Smart Watch Pro", price: 2499, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&h=200&fit=crop" },
    { id: 2, name: "Wireless Headphones", price: 1499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
    { id: 3, name: "Running Shoes", price: 3999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" },
    { id: 4, name: "Classic Watch", price: 4999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
    { id: 5, name: "Laptop Bag", price: 999, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop" },
    { id: 6, name: "Phone Case", price: 499, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop" },
    { id: 7, name: "Bluetooth Speaker", price: 1799, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop" },
    { id: 8, name: "Gaming Mouse", price: 1299, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop" },
    { id: 9, name: "Baggi T-Shirt", price: 199, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop" },
    { 
        id: 10, 
        name: "Handloom Lungi", 
        price: 599, 
        brand: "360",
        quantity: 2,
        image: "https://i.postimg.cc/tJVFb6qx/Screenshot-2026-07-05-14-30-22-88-2c94496c64eeaa7ef093c298145d7980.jpg",
        images: [
            "https://i.postimg.cc/tJVFb6qx/Screenshot-2026-07-05-14-30-22-88-2c94496c64eeaa7ef093c298145d7980.jpg",
            "https://i.postimg.cc/MX2VpGHH/Screenshot-2026-07-05-14-30-26-52-2c94496c64eeaa7ef093c298145d7980.jpg",
            "https://i.postimg.cc/LhKL8s5q/Screenshot-2026-07-05-14-30-38-57-2c94496c64eeaa7ef093c298145d7980.jpg",
            "https://i.postimg.cc/23RhS5yb/Screenshot-2026-07-05-14-30-45-47-2c94496c64eeaa7ef093c298145d7980.jpg"
        ]
    },
    { 
        id: 11, 
        name: "Hijabi Dupatta", 
        price: 249, 
        quantity: 3,
        image: "https://i.postimg.cc/yNk5MVg3/studio-product-photo-on-a-clean-white-background.png",
        images: [
            "https://i.postimg.cc/yNk5MVg3/studio-product-photo-on-a-clean-white-background.png"
        ]
    },
    { 
        id: 12, 
        name: "White Lungi", 
        price: 199, 
        quantity: 5,
        image: "https://i.postimg.cc/zD4VxN2z/Screenshot-2026-07-06-07-16-14-93-2c94496c64eeaa7ef093c298145d7980.jpg",
        images: [
            "https://i.postimg.cc/zD4VxN2z/Screenshot-2026-07-06-07-16-14-93-2c94496c64eeaa7ef093c298145d7980.jpg"
        ]
    },
    { 
        id: 13, 
        name: "Yellow Lungi", 
        price: 199, 
        quantity: 1,
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.postimg.cc/fbCGMc1H/Screenshot-2026-07-06-17-23-37-14-2c94496c64eeaa7ef093c298145d7980.jpg",
        images: [
            "https://i.postimg.cc/fbCGMc1H/Screenshot-2026-07-06-17-23-37-14-2c94496c64eeaa7ef093c298145d7980.jpg"
        ]
    },

    // ----- NEW PRODUCTS (ID 14-18) -----
    { 
        id: 14, 
        name: "White Shirt", 
        price: 329, 
        brand: "Signature",
        quantity: 10,
        sizes: ["M", "L", "XL"],
        image: "https://i.postimg.cc/Yqtr8ZXW/Screenshot-2026-07-06-22-29-01-35-2c94496c64eeaa7ef093c298145d7980.jpg",
        images: [
            "https://i.postimg.cc/Yqtr8ZXW/Screenshot-2026-07-06-22-29-01-35-2c94496c64eeaa7ef093c298145d7980.jpg"
        ]
    },
    { 
        id: 15, 
        name: "Jeans", 
        price: 599, 
        brand: "Killer",
        quantity: 8,
        sizes: ["28", "30", "32"],
        image: "https://i.postimg.cc/gjSTVxSt/a-clean-studio-product-style-photo-with-two-side-b.png",
        images: [
            "https://i.postimg.cc/gjSTVxSt/a-clean-studio-product-style-photo-with-two-side-b.png"
        ]
    },
    { 
        id: 16, 
        name: "Navratan Oil", 
        price: 209, 
        quantity: 15,
        spec: "270ml",
        image: "https://i.postimg.cc/rsKJLQjd/a-clean-studio-product-photo-on-a-white-background-2.png",
        images: [
            "https://i.postimg.cc/rsKJLQjd/a-clean-studio-product-photo-on-a-white-background-2.png"
        ]
    },
    { 
        id: 17, 
        name: "Dabur Anmol Gold Oil", 
        price: 219, 
        quantity: 12,
        spec: "475ml",
        image: "https://i.postimg.cc/c1pkftcR/file-00000000a6e071fab9cb7dfba1a4792f.png",
        images: [
            "https://i.postimg.cc/c1pkftcR/file-00000000a6e071fab9cb7dfba1a4792f.png"
        ]
    },
    { 
        id: 18, 
        name: "Hairpic", 
        price: 45, 
        quantity: 20,
        spec: "250ml",
        image: "https://i.postimg.cc/MGgVgVHs/a-clean-studio-product-shot-on-a-white-background.png",
        images: [
            "https://i.postimg.cc/MGgVgVHs/a-clean-studio-product-shot-on-a-white-background.png"
        ]
    }
];

// =====================
// EMAIL SETUP
// =====================
const YOUR_EMAIL_FORM_ID = "xeebnekq";
const YOUR_PHONE = "919905823282";
const YOUR_EMAIL = "siddiquinazim374@gmail.com";

// =====================
// CART
// =====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.quantity !== undefined && product.quantity <= 0) {
        alert('Sorry! This product is out of stock.');
        return;
    }
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, selectedSize: selectedSize || 'M' });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = total;
}

function showCart() {
    const container = document.getElementById('cartItems');
    const totalContainer = document.getElementById('cartTotal');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        if (totalContainer) totalContainer.innerHTML = '';
        return;
    }
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} x ${item.quantity} ${item.selectedSize ? ' (Size: '+item.selectedSize+')' : ''}</span>
            <span>₹${item.price * item.quantity}</span>
            <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (totalContainer) totalContainer.innerHTML = `<div class="cart-total">Total: ₹${total}</div>`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCart();
}

// =====================
// SEARCH
// =====================
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// =====================
// RENDER PRODUCTS
// =====================
function renderProducts(productList = products) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = productList.map(p => {
        const inStock = p.quantity === undefined || p.quantity > 0;
        const stockText = p.quantity !== undefined ? `📦 Stock: ${p.quantity}` : 'In Stock';
        return `
            <div class="product-card">
                <div class="product-image-gallery">
                    <img src="${p.image}" alt="${p.name}" id="mainImage-${p.id}">
                    ${p.images ? `
                        <div class="thumbnail-gallery">
                            ${p.images.slice(0, 3).map((img, index) => `
                                <img src="${img}" alt="${p.name} ${index+1}" 
                                     class="thumbnail" 
                                     onclick="document.getElementById('mainImage-${p.id}').src='${img}'">
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <h3>${p.name}</h3>
                ${p.brand ? `<p class="brand">🏷️ ${p.brand}</p>` : ''}
                ${p.spec ? `<p class="spec">📐 ${p.spec}</p>` : ''}
                <p class="stock ${inStock ? 'in-stock' : 'out-of-stock'}">${inStock ? stockText : '❌ Out of Stock'}</p>
                <p class="price">₹${p.price}</p>
                <button class="btn-detail" onclick="showProductDetail(${p.id})">👁️ View Details</button>
                <div class="product-actions">
                    ${inStock ? `<button class="btn-add" onclick="addToCart(${p.id})">🛒 Add</button>
                    <button class="btn-add" style="background:#10b981;" onclick="buyNow(${p.id})">⚡ Buy</button>` : `<button class="btn-add" style="background:#9ca3af;cursor:not-allowed;" disabled>Out of Stock</button>`}
                </div>
            </div>
        `;
    }).join('');
}

function buyNow(productId) {
    addToCart(productId);
    showPage('cart');
    showCart();
}

// =====================
// SIZE SELECTION
// =====================
let selectedSize = 'M';

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === size) btn.classList.add('active');
    });
}

function updateSizePrice(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.sizes) return;
    
    const sizePrices = {};
    let basePrice = product.price;
    product.sizes.forEach((size, index) => {
        sizePrices[size] = basePrice + (index * 10);
    });
    
    const sizePriceEl = document.getElementById('sizePrice');
    if (sizePriceEl) {
        sizePriceEl.textContent = product.sizes.map(size => 
            `₹${sizePrices[size]}`
        ).join(' ₹');
    }
}

// =====================
// PRODUCT DETAIL
// =====================
let currentProductId = null;
let timerInterval = null;

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductId = productId;
    
    const pages = ['homePage', 'productsPage', 'cartPage', 'loginPage', 'checkoutPage'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById('productDetailPage').style.display = 'block';
    
    const mrp = Math.round(product.price * 1.4);
    const discount = Math.round((1 - product.price/mrp) * 100);
    const codPrice = Math.round(product.price + 29);
    const inStock = product.quantity === undefined || product.quantity > 0;
    
    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailPrice').textContent = '₹' + product.price;
    document.getElementById('detailMrp').textContent = '₹' + mrp;
    document.getElementById('detailDiscount').textContent = discount + '% off';
    document.getElementById('detailCodPrice').textContent = codPrice;
    document.getElementById('detailStock').textContent = inStock ? (product.quantity || 'In Stock') : 'Out of Stock';
    document.getElementById('detailStock').style.color = inStock ? '#10b981' : '#ef4444';
    
    // Show brand and spec in detail
    const brandEl = document.getElementById('detailBrand');
    const specEl = document.getElementById('detailSpec');
    if (brandEl) {
        brandEl.textContent = product.brand ? '🏷️ Brand: ' + product.brand : '';
        brandEl.style.display = product.brand ? 'block' : 'none';
    }
    if (specEl) {
        specEl.textContent = product.spec ? '📐 ' + product.spec : '';
        specEl.style.display = product.spec ? 'block' : 'none';
    }
    
    const mainImg = document.getElementById('detailMainImage');
    mainImg.src = product.image;
    
    const thumbContainer = document.getElementById('detailThumbnails');
    thumbContainer.innerHTML = '';
    const allImages = product.images ? [product.image, ...product.images] : [product.image];
    allImages.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = product.name + ' ' + (index + 1);
        thumb.className = index === 0 ? 'active' : '';
        thumb.onclick = function() {
            document.getElementById('detailMainImage').src = img;
            document.querySelectorAll('.detail-thumbnails img').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        };
        thumbContainer.appendChild(thumb);
    });
    
    // ===== SIZE: SIRF TAB DIKHE JAB PRODUCT MEIN SIZES HO =====
    const sizeSection = document.querySelector('.size-section');
    if (product.sizes && product.sizes.length > 0) {
        sizeSection.style.display = 'block';
        const sizeContainer = document.getElementById('sizeOptions');
        sizeContainer.innerHTML = product.sizes.map(size => 
            `<button class="size-btn" onclick="selectSize('${size}')">${size}</button>`
        ).join('');
        selectSize(product.sizes[0]);
        updateSizePrice(productId);
    } else {
        sizeSection.style.display = 'none';
    }
    
    startTimer();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    let hours = 2, minutes = 4, seconds = 8;
    const timerEl = document.getElementById('detailTimer');
    timerInterval = setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { clearInterval(timerInterval); timerEl.textContent = '⏰ Deal Ended!'; return; }
        timerEl.textContent = 
            String(hours).padStart(2, '0') + 'h : ' + 
            String(minutes).padStart(2, '0') + 'm : ' + 
            String(seconds).padStart(2, '0') + 's';
    }, 1000);
}

function addToCartFromDetail() {
    if (currentProductId) {
        // Check if product has sizes and ensure size is selected
        const product = products.find(p => p.id === currentProductId);
        if (product && product.sizes && product.sizes.length > 0) {
            // Size is already selected via global selectedSize
            addToCart(currentProductId);
        } else {
            addToCart(currentProductId);
        }
    }
}

function buyNowFromDetail() {
    if (currentProductId) {
        addToCart(currentProductId);
        showPage('cart');
        showCart();
    }
}

// =====================
// NAVIGATION
// =====================
function showPage(page) {
    const pages = ['homePage', 'productsPage', 'cartPage', 'loginPage', 'checkoutPage', 'productDetailPage'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    if (page === 'home') {
        const el = document.getElementById('homePage');
        if (el) el.style.display = 'block';
    }
    if (page === 'products') {
        const el = document.getElementById('productsPage');
        if (el) {
            el.style.display = 'block';
            renderProducts();
        }
    }
    if (page === 'cart') {
        const el = document.getElementById('cartPage');
        if (el) {
            el.style.display = 'block';
            showCart();
        }
    }
    if (page === 'login') {
        const el = document.getElementById('loginPage');
        if (el) el.style.display = 'block';
    }
    if (page === 'checkout') {
        const el = document.getElementById('checkoutPage');
        if (el) el.style.display = 'block';
    }
}

// =====================
// LOGIN / SIGNUP
// =====================
const users = JSON.parse(localStorage.getItem('users')) || [];

function showSignup() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'block';
}

function showLogin() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) loginForm.style.display = 'block';
    if (signupForm) signupForm.style.display = 'none';
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', username);
            alert('Login successful!');
            const loginBtn = document.getElementById('loginBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            if (loginBtn) loginBtn.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'inline';
            showPage('home');
        } else {
            alert('Invalid username or password');
        }
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        if (users.find(u => u.username === username)) {
            alert('Username already exists');
            return;
        }
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! Please login.');
        showLogin();
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    if (loginBtn) loginBtn.style.display = 'inline';
    if (logoutBtn) logoutBtn.style.display = 'none';
    alert('Logged out');
    showPage('home');
}

// =====================
// CHECKOUT + EMAIL (WITH IMAGE + SIZE)
// =====================
function checkout() {
    if (cart.length === 0) {
        alert('Cart is empty');
        return;
    }
    showPage('checkout');
}

const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('paymentMethod').value;

        if (!name || !phone || !address || !payment) {
            alert('Please fill all fields');
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        let productList = '';
        cart.forEach((item, index) => {
            const size = item.selectedSize || 'N/A';
            productList += `${index + 1}. ${item.name}\n`;
            productList += `   P
