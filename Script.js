// ============================================
// 📦 PRODUCTS DATA
// ============================================
const products = [
    {
        name: "Shirt White",
        price: 299,
        detail: "Size: M, L, XL",
        image: "https://i.postimg.cc/NjGX7LxV/Screenshot-2026-07-06-22-29-01-35-2c94496c64eeaa7ef093c298145d7980.jpg"
    },
    {
        name: "Lungi",
        price: 599,
        detail: "Size: 2.15 meter | Qty: 2",
        image: "https://i.postimg.cc/1XqzK1gR/Screenshot-2026-07-07-17-44-18-94-2c94496c64eeaa7ef093c298145d7980.jpg"
    },
    {
        name: "Jeans",
        price: 599,
        image: "https://i.postimg.cc/1XqzK1gR/Screenshot-2026-07-07-17-44-18-94-2c94496c64eeaa7ef093c298145d7980.jpg"
    },
    {
        name: "Pasmina Suit",
        price: 699,
        image: "https://i.postimg.cc/1XqzK1gR/Screenshot-2026-07-07-17-44-18-94-2c94496c64eeaa7ef093c298145d7980.jpg"
    },
    {
        name: "boAt Airdopes 101v2",
        price: 699,
        detail: "Qty: 1",
        image: "https://i.postimg.cc/zGrnV8v3/Screenshot-2026-07-08-08-23-22-23-c4b2fae5edd267b2847f1b32e9bc41c3.jpg"
    },
    {
        name: "Bulb 9 Watt",
        price: 99,
        detail: "Warranty: 1 Year",
        image: "https://i.postimg.cc/BZYRG7h2/Screenshot-2026-07-08-08-11-44-83-40deb401b9ffe8e1df2f1cc5ba480b12.jpg"
    },
    {
        name: "Emergency Bulb",
        price: 329,
        detail: "Qty: 1",
        image: "https://i.postimg.cc/rwn9D7rW/Screenshot-2026-07-08-08-15-55-02-c4b2fae5edd267b2847f1b32e9bc41c3.jpg"
    },
    {
        name: "Navratan Oil",
        price: 209,
        detail: "Net Qty: 275 ml",
        image: "https://i.postimg.cc/wxJ4nbd8/a-clean-studio-product-photo-on-a-white-background-2.png"
    },
    {
        name: "Dabur Anmol Oil",
        price: 219,
        detail: "Net Qty: 475 ml",
        image: "https://i.postimg.cc/fT7zWKmj/file-00000000a6e071fab9cb7dfba1a4792f.png"
    },
    {
        name: "Harpic",
        price: 49,
        detail: "Net Qty: 250 ml",
        image: "https://i.postimg.cc/sxqVB6K4/a-clean-studio-product-shot-on-a-white-background.png"
    },
    {
        name: "Spiral Cable Protectors",
        price: 79,
        detail: "Size: Full",
        image: "https://i.postimg.cc/yd9qQ1Tc/Screenshot-2026-07-07-17-17-28-34-c4b2fae5edd267b2847f1b32e9bc41c3.jpg"
    },
    {
        name: "Gaming Finger Sleeve",
        price: 69,
        detail: "Size: Full | Qty: 2",
        image: "https://i.postimg.cc/VsD4yyHD/Screenshot-2026-07-07-17-43-48-36-2c94496c64eeaa7ef093c298145d7980.jpg"
    }
];

// ============================================
// 📱 TELEGRAM SETUP - NAYA BOT
// ============================================
const BOT_TOKEN = "8803857418:AAHuj1SNOXA2U0xyix03d6ioy3ubq0jcaVc";
const CHAT_ID = "6323973083";  // ← Yahan apna naya CHAT_ID daalein!

// ============================================
// 🎯 DOM ELEMENTS
// ============================================
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("close-modal");
let currentProduct = null;

// ============================================
// 📋 DISPLAY PRODUCTS
// ============================================
function displayProducts(list) {
    if (!productGrid) {
        console.error("❌ productGrid not found!");
        return;
    }

    productGrid.innerHTML = "";
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
// 📤 BUY NOW - TELEGRAM (IMAGE KE SATH)
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

    const caption = `🛒 *नया ऑर्डर आया है!*\n\n` +
        `📦 *Product:* ${currentProduct.name}\n` +
        `💰 *Price:* ₹${currentProduct.price}\n` +
        `📝 *Detail:* ${currentProduct.detail || "N/A"}\n` +
        `👤 *Buyer:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Address:* ${address}`;

    // IMAGE KE SATH SEND KAREIN
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;

    status.innerHTML = "⏳ Sending order...";
    status.style.color = "#ff6f00";

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            photo: currentProduct.image,  // 👈 IMAGE URL
            caption: caption,
            parse_mode: "Markdown"
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            status.innerHTML = "✅ Order sent with image! 🎉";
            status.style.color = "green";
            setTimeout(() => modal.style.display = "none", 2000);
        } else {
            // Agar image fail ho toh text bhejein
            console.log("Photo Error:", data);
            sendTextFallback(name, phone, address, status);
        }
    })
    .catch(() => {
        sendTextFallback(name, phone, address, status);
    });
});

// ============================================
// 📤 FALLBACK - Agar image fail ho toh text bhejein
// ============================================
function sendTextFallback(name, phone, address, status) {
    const caption = `🛒 *नया ऑर्डर आया है!*\n\n` +
        `📦 *Product:* ${currentProduct.name}\n` +
        `💰 *Price:* ₹${currentProduct.price}\n` +
        `📝 *Detail:* ${currentProduct.detail || "N/A"}\n` +
        `👤 *Buyer:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Address:* ${address}\n\n` +
        `🖼️ *Image Link:* ${currentProduct.image}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: caption,
            parse_mode: "Markdown"
        })
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
// 🆕 ADD PRODUCT - NECHE
// ============================================
document.getElementById("saveProductBtn").addEventListener("click", function() {
    const name = document.getElementById("newName").value.trim();
    const price = parseInt(document.getElementById("newPrice").value);
    const detail = document.getElementById("newDetail").value.trim();
    let image = document.getElementById("newImage").value.trim();
    const msg = document.getElementById("addMsg");

    if (!name) {
        msg.innerHTML = '⚠️ Please enter product name!';
        msg.style.color = 'red';
        return;
    }
    if (!price || isNaN(price) || price <= 0) {
        msg.innerHTML = '⚠️ Please enter valid price!';
        msg.style.color = 'red';
        return;
    }

    if (!image) {
        image = 'https://i.postimg.cc/1XqzK1gR/Screenshot-2026-07-07-17-44-18-94-2c94496c64eeaa7ef093c298145d7980.jpg';
    }

    const newProduct = {
        name: name,
        price: price,
        detail: detail || 'No details',
        image: image
    };

    products.push(newProduct);
    displayProducts(products);

    document.getElementById('newName').value = '';
    document.getElementById('newPrice').value = '';
    document.getElementById('newDetail').value = '';
    document.getElementById('newImage').value = '';

    msg.innerHTML = `✅ "${name}" added successfully! (Total: ${products.length} products)`;
    msg.style.color = 'green';

    setTimeout(() => {
        msg.innerHTML = '';
    }, 3000);
});

// ============================================
// 🚀 INITIALIZE
// ============================================
displayProducts(products);
console.log("✅ Araria Mart loaded successfully!");
console.log("📦 Total Products:", products.length);
