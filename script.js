// =====================
// PRODUCTS DATABASE
// =====================
const products = [
    { id: 1, name: "Smart Watch Pro", price: 2499, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&h=200&fit=crop" },
    { id: 2, name: "Wireless Headphones", price: 1499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
    { id: 3, name: "Running Shoes", price: 3999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" },
    { id: 4, name: "Classic Watch", price: 4999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
    { id: 5, name: "Laptop Bag", price: 999, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop" },
    { id: 6, name: "Phone Case", price: 499, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop" },
    { id: 7, name: "Bluetooth Speaker", price: 1799, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop" },
    { id: 8, name: "Gaming Mouse", price: 1299, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop" }
    { id: 9, name: "Baggi T-Shirt", price: 199, image: "https://via.placeholder.com/200" },
];

// =====================
// CART
// =====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = total;
}

function showCart() {
    const container = document.getElementById('cartItems');
    const totalContainer = document.getElementById('cartTotal');
    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        totalContainer.innerHTML = '';
        return;
    }
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
            <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalContainer.innerHTML = `<div class="cart-total">Total: ₹${total}</div>`;
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
    grid.innerHTML = productList.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
            <button class="btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
            <button class="btn-add" style="background:#10b981;" onclick="buyNow(${p.id})">Buy Now</button>
        </div>
    `).join('');
}

function buyNow(productId) {
    addToCart(productId);
    showPage('cart');
    showCart();
}

// =====================
// NAVIGATION
// =====================
function showPage(page) {
    const pages = ['homePage', 'productsPage', 'cartPage', 'loginPage', 'checkoutPage'];
    pages.forEach(id => document.getElementById(id).style.display = 'none');
    if (page === 'home') document.getElementById('homePage').style.display = 'block';
    if (page === 'products') {
        document.getElementById('productsPage').style.display = 'block';
        renderProducts();
    }
    if (page === 'cart') {
        document.getElementById('cartPage').style.display = 'block';
        showCart();
    }
    if (page === 'login') document.getElementById('loginPage').style.display = 'block';
    if (page === 'checkout') document.getElementById('checkoutPage').style.display = 'block';
}

// =====================
// LOGIN / SIGNUP
// =====================
const users = JSON.parse(localStorage.getItem('users')) || [];

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', username);
        alert('Login successful!');
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline';
        showPage('home');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
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

function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('loginBtn').style.display = 'inline';
    document.getElementById('logoutBtn').style.display = 'none';
    alert('Logged out');
    showPage('home');
}

// Check if user is logged in
window.onload = function() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline';
    }
    updateCartCount();
};

// =====================
// CHECKOUT + NOTIFICATION
// =====================
document.getElementById('orderForm').addEventListener('submit', function(e) {
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
    const order = {
        name,
        phone,
        address,
        payment,
        total,
        items: cart,
        date: new Date().toLocaleString()
    };

    // Save order
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Send notification via Formspree (free)
    fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            phone,
            address,
            payment,
            total,
            items: cart.map(item => `${item.name} x${item.quantity}`).join(', ')
        })
    }).then(() => {
        alert(`✅ Order Placed!\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nPayment: ${payment}\nTotal: ₹${total}\n\nWe will contact you shortly.`);
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showPage('home');
    }).catch(() => {
        alert('Order saved locally. We will contact you soon.');
    });
});

// =====================
// CHECKOUT - BUY NOW
// =====================
function checkout() {
    if (cart.length === 0) {
        alert('Cart is empty');
        return;
    }
    showPage('checkout');
     }
