// ============================================
// 📦 PRODUCTS DATA
// ============================================
const products = [
    // ===== PAHLE WALE PRODUCTS =====
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
    name: "Apple",
    price: 180,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    description: "Fresh aur juicy seb, daily use ke liye."
  },
  {
    name: "Banana",
    price: 60,
    unit: "12 ps",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    description: "Fresh ripe banana, energy aur taste ke liye."
  },
  {
    name: "Mango",
    price: 120,
    unit: "2 kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    description: "Meetha aur juicy aam."
  },
  {
    name: "Orange",
    price: 100,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    description: "Juicy orange, vitamin C ka achha source."
  },
  {
    name: "Papaya",
    price: 60,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305",
    description: "Soft aur sweet papaya."
  },
  {
    name: "Watermelon",
    price: 35,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa",
    description: "Fresh aur juicy tarbooz."
  },
  {
    name: "Pineapple",
    price: 80,
    unit: "1 piece",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
    description: "Sweet aur fresh pineapple."
  },
  {
    name: "Guava",
    price: 80,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46",
    description: "Fresh amrood, crunchy aur tasty."
  },
  {
    name: "Grapes",
    price: 100,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
    description: "Sweet aur fresh grapes."
  },
  {
    name: "Pomegranate",
    price: 160,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc",
    description: "Fresh anar, juicy aur tasty."
  },
  {
    name: "Papaya",
    price: 60,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe",
    description: "Fresh aur naturally sweet papaya."
  },
  {
    name: "Kiwi",
    price: 240,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a",
    description: "Fresh kiwi fruit."
  },
  {
    name: "Strawberry",
    price: 300,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    description: "Fresh aur sweet strawberry."
  },
  {
    name: "Coconut",
    price: 50,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1580984969071-a8da5656c2e4",
    description: "Fresh nariyal."
  },
  {
    name: "Litchi",
    price: 140,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1621557379254-4b5f1c9d3e0f",
    description: "Sweet aur juicy litchi."
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
    },

    // ===== NAYE PRODUCTS =====
    {
        name: "Basmati Rice",
        price: 160,
        detail: "1 kg",
        image: "https://i.postimg.cc/T1JCRzfn/Screenshot-2026-08-11-12-02-12-74-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Basmati Rice",
        price: 2099,
        detail: "15 kg",
        image: "https://i.postimg.cc/T1JCRzfn/Screenshot-2026-08-11-12-02-12-74-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Basmati Rice",
        price: 3999,
        detail: "30 kg",
        image: "https://i.postimg.cc/T1JCRzfn/Screenshot-2026-08-11-12-02-12-74-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Asirvad Aata",
        price: 240,
        detail: "5 kg",
        image: "https://i.postimg.cc/sfMTqNkM/Screenshot-2026-08-11-12-18-57-44-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
    name: "Rohu Machhli",
    localName: "Rui / Rehu",
    price: 250,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://dyimg77.exportersindia.com/product_images/bc-full/2026/1/15284727/fresh-rohu-fish-1769683737-8559906.jpeg",
    description: "Fresh Rohu machhli, Araria side mein commonly milne wali machhli."
  },

  {
    name: "Katla Machhli",
    localName: "Katla",
    price: 200,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://www.naavfresh.com/products/Katla.webp",
    description: "Fresh Katla machhli."
  },

  {
    name: "Magur Machhli",
    localName: "Desi Magur",
    price: 350,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://boliya.in/wp-content/uploads/2025/04/Magur-Mas.png",
    description: "Desi Magur, freshwater catfish."
  },

  {
    name: "Singhi Machhli",
    localName: "Singhi",
    price: 350,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://cdn.dotpe.in/longtail/item_thumbnails/5462833/wF6gO8rV.webp",
    description: "Fresh Singhi machhli."
  },

  {
    name: "Pangasius Machhli",
    localName: "Pangash / Basa",
    price: 180,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://www.stsnarao.com/wp-content/uploads/2020/01/pangasiusu.jpg",
    description: "Fresh Pangasius/Basa machhli."
  },

  {
    name: "Tilapia Machhli",
    localName: "Telapia",
    price: 180,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://akm-img-a-in.tosshub.com/lingo/atbn/images/photo_gallery/202307/whatsapp-image-2023-07-14-at-14.111.jpg",
    description: "Fresh Tilapia machhli."
  },

  {
    name: "Koi Machhli",
    localName: "Koi",
    price: 350,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://static.toiimg.com/thumb/116912199/116912199.jpg?height=746&imgsize=73020&resizemode=76&width=420",
    description: "Fresh Koi machhli."
  },

  {
    name: "Pabda Machhli",
    localName: "Pabda",
    price: 450,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://www.bigbasket.com/media/uploads/p/l/40282124_1-fresho-pabda-fish.jpg",
    description: "Soft meat wali fresh Pabda machhli."
  },

  {
    name: "Ilish Machhli",
    localName: "Ilish",
    price: 600,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://www.bigbasket.com/media/uploads/p/l/40282126_1-fresho-hilsa-fish.jpg",
    description: "Fresh Ilish/Hilsa machhli."
  },

  {
    name: "Chingri",
    localName: "Jhinga / Chingri",
    price: 400,
    unit: "1kg",
    weight: "1kg",
    quantityOptions: ["5kg", "10kg", "15kg", "20kg", "25kg", "30kg"],
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
    description: "Fresh Chingri/Jhinga."
  },
    {
        name: "Fortune Mustard Oil",
        price: 180,
        detail: "1 L",
        image: "https://i.postimg.cc/wBdKjpdb/Screenshot-2026-08-11-12-25-33-03-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Arhan Daal",
        price: 200,
        detail: "1 kg",
        image: "https://i.postimg.cc/FHrWWHNh/Screenshot-2026-08-11-12-28-40-14-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Arhan Daal",
        price: 899,
        detail: "5 kg",
        image: "https://i.postimg.cc/FHrWWHNh/Screenshot-2026-08-11-12-28-40-14-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Moong Daal",
        price: 99,
        detail: "1 kg",
        image: "https://i.postimg.cc/9M0HvB2c/Screenshot-2026-08-11-12-36-24-43-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Moong Daal",
        price: 449,
        detail: "5 kg",
        image: "https://i.postimg.cc/9M0HvB2c/Screenshot-2026-08-11-12-36-24-43-439a3fec0400f8974d35eed09a31f914.jpg"
    },
    {
        name: "Masoor Daal",
        price: 99,
        detail: "1 kg",
        image: "https://i.postimg.cc/G2G60gfz/Screenshot-2026-08-11-12-40-51-67-8b1cfbb769bd52fc36fa25a4fcc64305.jpg"
    },
    {
        name: "Masoor Daal",
        price: 439,
        detail: "5 kg",
        image: "https://i.postimg.cc/G2G60gfz/Screenshot-2026-08-11-12-40-51-67-8b1cfbb769bd52fc36fa25a4fcc64305.jpg"
    },
    {
        name: "Besan",
        price: 140,
        detail: "1 kg",
        image: "https://i.postimg.cc/rFmgxY9f/96c378e144e5e6e72126deaa34b6d4c8.jpg"
    },
    {
        name: "Besan",
        price: 70,
        detail: "500 g",
        image: "https://i.postimg.cc/rFmgxY9f/96c378e144e5e6e72126deaa34b6d4c8.jpg"
    },
    {
        name: "Haldi Powder",
        price: 89,
        detail: "250 g",
        image: "https://i.postimg.cc/c4yw49bF/487b29f4c3d68244333646090a93a74b.jpg"
    },
    {
        name: "Haldi Powder",
        price: 149,
        detail: "500 g",
        image: "https://i.postimg.cc/c4yw49bF/487b29f4c3d68244333646090a93a74b.jpg"
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
