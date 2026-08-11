// ============================================
// 📦 PRODUCTS DATA
// ============================================
const products = [
    {
        name: "Kaila (Banana)",
        price: 60,
        detail: "12 pcs",
        image: "https://i.postimg.cc/3x5qQpZv/banana.png"
    },
    {
        name: "Tiger Sarso Oil",
        price: 200,
        detail: "1 kg",
        image: "https://i.postimg.cc/K8w6vqVj/mustard-oil.png"
    },
    {
        name: "Fortune Oil",
        price: 180,
        detail: "1 kg",
        image: "https://i.postimg.cc/s2d6hJhR/cooking-oil.png"
    },
    {
        name: "Seb (Apple)",
        price: 250,
        detail: "1 kg",
        image: "https://i.postimg.cc/3x5qQpZv/apple.png"
    },
    {
        name: "Anaar (Pomegranate)",
        price: 300,
        detail: "1 kg",
        image: "https://i.postimg.cc/K8w6vqVj/pomegranate.png"
    },
    {
        name: "Surf Excel Detergent",
        price: 150,
        detail: "1 kg",
        image: "https://i.postimg.cc/s2d6hJhR/detergent.png"
    },
    {
        name: "Tiger Sarso Oil",
        price: 2450,
        detail: "14.3 kg",
        image: "https://i.postimg.cc/K8w6vqVj/mustard-oil.png"
    },
    {
        name: "Double Horse Chawal",
        price: 75,
        detail: "1 kg",
        image: "https://i.postimg.cc/3x5qQpZv/rice.png"
    },
    {
        name: "Double Horse Chawal",
        price: 980,
        detail: "25 kg",
        image: "https://i.postimg.cc/3x5qQpZv/rice.png"
    }
];

// ============================================
// 📱 TELEGRAM SETUP
// ============================================
const BOT_TOKEN = "8851136691:AAGTh9Ib2cixvgcercFggHxSwdwxUpI_2eA";
const CHAT_ID = "6323973083";

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

    const caption = `🛒 *नया ऑर्डर आया है!*\n\n` +
        `📦 *Product:* ${currentProduct.name}\n` +
        `💰 *Price:* ₹${currentProduct.price}\n` +
        `📝 *Detail:* ${currentProduct.detail || "N/A"}\n` +
        `👤 *Buyer:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Address:* ${address}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;

    status.innerHTML = "⏳ Sending order...";
    status.style.color = "#ff6f00";

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            photo: currentProduct.image,
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
            status.innerHTML = "❌ Failed to send order!";
            status.style.color = "red";
            console.log("Error:", data);
        }
    })
    .catch(() => {
        status.innerHTML = "❌ Network error!";
        status.style.color = "red";
    });
});

// ============================================
// 🚀 INITIALIZE
// ============================================
displayProducts(products);
console.log("✅ Araria Mart loaded successfully!");
console.log("📦 Total Products:", products.length);
