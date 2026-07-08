// ============================================
// 1. सारे Products (Cover पहले, फिर Shirt...)
// ============================================
const products = [
  // --- Back Covers ---
  { name: "Cover Vivo Y20", price: 179, detail: "📱 Model: Vivo Y20 | Qty: 1", image: "https://i.postimg.cc/02pVttJb/Screenshot-2026-07-08-08-24-41-25-2c94496c64eeaa7ef093c298145d7980.jpg" },
  { name: "Cover Vivo Y400 Pro", price: 199, detail: "📱 Model: Vivo Y400 Pro | Qty: 1", image: "https://i.postimg.cc/BbNXb9Vr/Screenshot-2026-07-08-08-30-27-43-2c94496c64eeaa7ef093c298145d7980.jpg" },
  { name: "Cover Realme P4x 5G", price: 239, detail: "📱 Model: Realme P4x 5G | Qty: 1", image: "https://i.postimg.cc/Y0VBbd4P/Screenshot-2026-07-08-08-32-32-19-c4b2fae5edd267b2847f1b32e9bc41c3.jpg" },
  // --- Fashion ---
  { name: "Shirt White", price: 299, detail: "Size: M, L, XL", image: "https://i.postimg.cc/NjGX7LxV/Screenshot-2026-07-06-22-29-01-35-2c94496c64eeaa7ef093c298145d7980.jpg" },
  { name: "Handloom Lungi", price: 599, detail: "Size: 2.15 meter | Qty: 2", image: "https://i.postimg.cc/1XqzK1gR/Screenshot-2026-07-07-17-44-18-94-2c94496c64eeaa7ef093c298145d7980.jpg" },
  { name: "Jeans", price: 599, detail: "Size: 28, 30, 32 | Brand: killer", image: "https://i.postimg.cc/JhPPc9Jk/a-clean-studio-product-style-photo-with-two-side-b.png" },
  { name: "Pasmina Suit", price: 699, detail: "Qty: 1", image: "https://i.postimg.cc/CKP0RMhS/b5eb49b31f4ee9ac3e3c939d558a4fea49966ab8ce6748f8324b48ef42cd592f.png" },
  // --- Electronics ---
  { name: "boAt Airdopes 101v2", price: 699, detail: "Qty: 1", image: "https://i.postimg.cc/zGrnV8v3/Screenshot-2026-07-08-08-23-22-23-c4b2fae5edd267b2847f1b32e9bc41c3.jpg" },
  { name: "Bulb 9 Watt", price: 99, detail: "Warranty: 1 Year", image: "https://i.postimg.cc/BZYRG7h2/Screenshot-2026-07-08-08-11-44-83-40deb401b9ffe8e1df2f1cc5ba480b12.jpg" },
  { name: "Emergency Bulb", price: 329, detail: "Qty: 1", image: "https://i.postimg.cc/rwn9D7rW/Screenshot-2026-07-08-08-15-55-02-c4b2fae5edd267b2847f1b32e9bc41c3.jpg" },
  { name: "Emergency Bulb", price: 619, detail: "Qty: 2", image: "https://i.postimg.cc/GpNwxMZv/Screenshot-2026-07-08-08-19-04-51-c4b2fae5edd267b2847f1b32e9bc41c3.jpg" },
  // --- Oils ---
  { name: "Navratan Oil", price: 209, detail: "Net Qty: 275 ml", image: "https://i.postimg.cc/wxJ4nbd8/a-clean-studio-product-photo-on-a-white-background-2.png" },
  { name: "Dabur Anmol Oil", price: 219, detail: "Net Qty: 475 ml", image: "https://i.postimg.cc/fT7zWKmj/file-00000000a6e071fab9cb7dfba1a4792f.png" },
  // --- Others ---
  { name: "Harpic", price: 49, detail: "Net Qty: 250 ml", image: "https://i.postimg.cc/sxqVB6K4/a-clean-studio-product-shot-on-a-white-background.png" },
  { name: "Spiral Cable Protectors", price: 79, detail: "Size: Full", image: "https://i.postimg.cc/yd9qQ1Tc/Screenshot-2026-07-07-17-17-28-34-c4b2fae5edd267b2847f1b32e9bc41c3.jpg" },
  { name: "Gaming Finger Sleeve", price: 69, detail: "Size: Full | Qty: 2", image: "https://i.postimg.cc/VsD4yyHD/Screenshot-2026-07-07-17-43-48-36-2c94496c64eeaa7ef093c298145d7980.jpg" }
];

// ============================================
// 2. TELEGRAM SETUP (आपका Token और ID डाला हुआ है)
// ============================================
const BOT_TOKEN = "8690541132:AAFybx_2hGHNRAE0Np3NNz_sBdf9FRi5fPw";
const CHAT_ID = "6323973083";

// ============================================
// 3. SCRIPT LOGIC (बिना किसी गड़बड़ी के)
// ============================================
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("productModal");
const closeModal = document.querySelector(".close-modal");
let currentProduct = null;

function displayProducts(list) {
    productGrid.innerHTML = "";
    list.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23eee%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 font-family=%22sans-serif%22 font-size=%2214%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3ENo Image%3C/text%3E%3C/svg%3E'">
            <h3>${product.name}</h3>
            <p class="product-price">₹${product.price}</p>
            <button onclick="openModal(${index})">View Details</button>
        `;
        productGrid.appendChild(card);
    });
}

function openModal(index) {
    const product = products[index];
    if (!product) return;
    currentProduct = product;
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = "₹" + product.price;
    document.getElementById("modalDetail").innerText = product.detail || "N/A";
    document.getElementById("buyerName").value = "";
    document.getElementById("buyerPhone").value = "";
    document.getElementById("buyerAddress").value = "";
    document.getElementById("orderStatus").innerText = "";
    modal.style.display = "flex";
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

document.getElementById("buyNowBtn").addEventListener("click", function() {
    const name = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const address = document.getElementById("buyerAddress").value.trim();
    const status = document.getElementById("orderStatus");

    if (!name || !phone || !address) {
        status.innerText = "❌ कृपया Name, Phone और Address भरें!";
        status.style.color = "red";
        return;
    }

    const caption = `🛍️ *नया ऑर्डर आया है!*\n📦 *Product:* ${currentProduct.name}\n💰 *Price:* ₹${currentProduct.price}\n📝 *Detail:* ${currentProduct.detail || 'N/A'}\n🧑 *Buyer:* ${name}\n📞 *Phone:* ${phone}\n🏠 *Address:* ${address}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;
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
            status.innerText = "✅ ऑर्डर भेज दिया गया!";
            status.style.color = "green";
            setTimeout(() => modal.style.display = "none", 2000);
        } else {
            status.innerText = "❌ फेल हो गया। Token/ID चेक करो।";
            status.style.color = "red";
            console.log(data);
        }
    })
    .catch(err => {
        status.innerText = "❌ Network Error।";
        status.style.color = "red";
        console.log(err);
    });
});

displayProducts(products);
searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = products.filter(item => item.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
});
