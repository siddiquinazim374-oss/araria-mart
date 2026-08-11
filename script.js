// ============================================
// 📱 TELEGRAM SETUP
// ============================================
const BOT_TOKEN = "8851136691:AAGTh9Ib2cixvgcercFggHxSwdwxUpI_2eA";
const CHAT_ID = "6323973083";

// ============================================
// 📥 JSONBin Setup - Yahan apna BIN_ID aur API_KEY daalein
// ============================================
const BIN_ID = "YOUR_BIN_ID_HERE";      // ← JSONBin se copy karein
const API_KEY = "YOUR_API_KEY_HERE";    // ← JSONBin se copy karein

let products = [];
let currentProduct = null;

// ============================================
// 🎯 DOM ELEMENTS
// ============================================
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("close-modal");

// ============================================
// 📥 Products Load (JSONBin se)
// ============================================
async function loadProducts() {
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { 'X-Master-Key': API_KEY }
        });
        const data = await res.json();
        products = data.record?.products || [];
        displayProducts(products);
        console.log("✅ Products loaded:", products.length);
    } catch (error) {
        console.log("❌ Load failed:", error);
        products = [];
        displayProducts(products);
    }
}

// ============================================
// 📋 DISPLAY PRODUCTS
// ============================================
function displayProducts(list) {
    if (!productGrid) return;
    productGrid.innerHTML = "";
    if (!list || list.length === 0) {
        productGrid.innerHTML = `<p style="text-align:center; padding:40px; color:#888;">🛒 No products available. Add your first product!</p>`;
        return;
    }
    list.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23eee%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2214%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3ENo Image%3C/text%3E%3C/svg%3E'">
            <h3>${product.name}</h3>
            <p class="product-price">₹${product.price}</p>
            ${product.detail ? `<p class="product-detail">${product.detail}</p>` : ''}
            <button onclick="openModal(${index})">📦 View Details</button>
        `;
        productGrid.appendChild(card);
    });
}

// ============================================
// 🔍 SEARCH
// ============================================
if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const keyword = searchInput.value.toLowerCase();
        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(keyword)
        );
        displayProducts(filtered);
    });
}

// ============================================
// 🪟 MODAL FUNCTIONS
// ============================================
function openModal(index) {
    const product = products[index];
    currentProduct = product;
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = `₹${product.price}`;
    document.getElementById("modalDetail").innerText = product.detail || "No extra details";
    document.getElementById("buyerName").value = "";
    document.getElementById("buyerPhone").value = "";
    document.getElementById("buyerAddress").value = "";
    document.getElementById("orderStatus").innerText = "";
    modal.style.display = "block";
}
if (closeModal) {
    closeModal.onclick = () => { modal.style.display = "none"; };
}
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// ============================================
// 📤 BUY NOW - TELEGRAM
// ============================================
document.getElementById("buyNowBtn").addEventListener("click", function() {
    const name = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const address = document.getElementById("buyerAddress").value.trim();
    const status = document.getElementById("orderStatus");
    if (!name || !phone || !address) {
        status.innerHTML = "⚠️ कृपया Name, Phone और Address भरें!";
        status.style.color = "red";
        return;
    }
    const imageUrl = currentProduct.image;
    status.innerHTML = "⏳ Sending order...";
    status.style.color = "#ff6f00";
    fetch(imageUrl)
        .then(res => {
            if (!res.ok) throw new Error("Image download failed");
            return res.blob();
        })
        .then(blob => {
            const formData = new FormData();
            formData.append("chat_id", CHAT_ID);
            formData.append("photo", blob, "product.jpg");
            formData.append("caption", 
                `🛒 *नया ऑर्डर आया है!*\n\n` +
                `📦 *Product:* ${currentProduct.name}\n` +
                `💰 *Price:* ₹${currentProduct.price}\n` +
                `📝 *Detail:* ${currentProduct.detail || "N/A"}\n` +
                `👤 *Buyer:* ${name}\n` +
                `📞 *Phone:* ${phone}\n` +
                `📍 *Address:* ${address}`
            );
            formData.append("parse_mode", "Markdown");
            return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
                method: "POST",
                body: formData
            });
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                status.innerHTML = "✅ Order sent with image! 🎉";
                status.style.color = "green";
                setTimeout(() => modal.style.display = "none", 2000);
            } else {
                sendTextFallback(name, phone, address, status);
            }
        })
        .catch(() => sendTextFallback(name, phone, address, status));
});

function sendTextFallback(name, phone, address, status) {
    const caption = `🛒 *नया ऑर्डर आया है!*\n\n` +
        `📦 *Product:* ${currentProduct.name}\n` +
        `💰 *Price:* ₹${currentProduct.price}\n` +
        `📝 *Detail:* ${currentProduct.detail || "N/A"}\n` +
        `👤 *Buyer:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Address:* ${address}\n\n` +
        `🖼️ *Image Link:* ${currentProduct.image}`;
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: caption, parse_mode: "Markdown" })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            status.innerHTML = "✅ Order sent! (Image link in message)";
            status.style.color = "green";
            setTimeout(() => modal.style.display = "none", 2000);
        } else {
            status.innerHTML = `❌ Error: ${data.description || "Unknown"}`;
            status.style.color = "red";
        }
    })
    .catch(() => {
        status.innerHTML = "❌ Network error!";
        status.style.color = "red";
    });
}

// ============================================
// 🚀 START
// ============================================
loadProducts();
console.log("✅ Araria Mart loaded!");
