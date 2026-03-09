// Biến menu giữ nguyên (danh sách món không đổi)
const menu = {
    "Matcha Series": [
        { name: "Matcha Latte Frappe", price: "$6.00" },
        { name: "Matcha Latte", price: "$5.75" },
        { name: "Strawberry Matcha Latte", price: "$6.00" },
        { name: "Mango Matcha Latte", price: "$6.00" }
    ],
    "Coffee Series (Hot/Ice)": [
        { name: "Vietnamese Phin Coffee", price: "S: $4.00" },
        { name: "Bac Xiu Sweet Milk", price: "M: $5.00" },
        { name: "Vietnamese Milk Coffee", price: "S: $4.50" },
        { name: "Salted Cream Coffee", price: "M: $5.25" },
        { name: "Americano", price: "M: $4.00" },
        { name: "Mocha", price: "M: $5.50" },
        { name: "Caramel Frappe", price: "M: $5.50" },
        { name: "Mocha Frappe", price: "M: $5.50" },
        { name: "Latte", price: "M: $4.75" },
        { name: "Espresso", price: "S: $3.50" }
    ],
    "Milk Tea": [
        { name: "House Special Milk Tea", price: "$6.25" },
        { name: "Oreo Cream Milk Tea", price: "$6.25" },
        { name: "Brown Sugar Boba", price: "$6.25" },
        { name: "Taro Milk Tea", price: "$6.25" },
        { name: "Earl Grey Milk Tea", price: "$5.75" },
        { name: "Thai Milk Tea", price: "$5.75" },
        { name: "Green Thai Milk Tea", price: "$5.75" }
    ],
    "Fruit Tea": [
        { name: "Fresh Fruit Tea", price: "$6.25" },
        { name: "Very Berry Tea", price: "$6.25" },
        { name: "Peach Orange Lemongrass", price: "$6.25" },
        { name: "Peach Tea", price: "$5.75" },
        { name: "Strawberry Green Tea", price: "$5.75" },
        { name: "Mango Green Tea", price: "$5.75" },
        { name: "Kumquat Green Tea", price: "$5.75" },
        { name: "Pink Guava Green Tea", price: "$5.75" },
        { name: "Lychee Rose Tea", price: "$5.75" }
    ],
    "Ice Blended": [
        { name: "Berry Mix Smoothie", price: "$6.00" },
        { name: "Tropical Smoothie", price: "$6.00" },
        { name: "Oreo Cookies Frappe", price: "$6.00" },
        { name: "Taro Frappe", price: "$6.00" },
        { name: "Strawberry Choco", price: "$6.00" },
        { name: "Mint Choco Frappe", price: "$6.00" }
    ],
    "Sparkling Creations": [
        { name: "Blue Sky Sparkler", price: "$6.25" },
        { name: "Lemon Sparkler", price: "$6.25" },
        { name: "Pink Guava Sparkler", price: "$6.25" },
        { name: "Peach Sparkler", price: "$6.25" }
    ],
    "Cold Brew & Hot Drinks": [
        { name: "Jasmine Cold Brew", price: "$4.25" },
        { name: "Oolong Cold Brew", price: "$4.25" },
        { name: "Earl Grey Cold Brew", price: "$4.25" },
        { name: "Chrysanthemum Hot", price: "$4.25" },
        { name: "Ginger Hot Tea", price: "$4.25" }
    ]
};

const container = document.getElementById("menu-container");
let isFirst = true; // Biến cờ để tự động mở danh mục đầu tiên

for (const category in menu) {
    const items = menu[category];
    
    // Tạo cấu trúc Accordion
    const section = document.createElement("div");
    section.className = "category-section";

    // 1. Header (Nút bấm để xổ xuống)
    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `
        <h2>${category}</h2>
        <i class="fa-solid fa-chevron-down toggle-icon" style="${isFirst ? 'transform: rotate(180deg)' : ''}"></i>
    `;

    // 2. Content Wrapper (Phần xổ ra)
    const wrapper = document.createElement("div");
    wrapper.className = `category-content-wrapper ${isFirst ? 'open' : ''}`;
    
    const content = document.createElement("div");
    content.className = "category-content";

    // Lọc: 6 món đầu dạng hình, còn lại dạng chữ
    const cardItems = items.slice(0, 6);
    const listItems = items.slice(6);

    // --- RENDER DẠNG CARD (ẢNH MẪU) ---
    if (cardItems.length > 0) {
        let gridHTML = '<div class="card-grid">';
        cardItems.forEach(drink => {
            const imgPath = drink.image ? drink.image : "images/brown-sugar.png";
            gridHTML += `
                <div class="drink-card">
                    <div class="card-top">
                        <img src="${imgPath}" alt="${drink.name}">
                        <div class="card-info">
                            <div class="card-desc">Delicious selected blend</div>
                            <div class="card-price">${drink.price}</div>
                        </div>
                    </div>
                    <div class="card-name">${drink.name}</div>
                </div>
            `;
        });
        gridHTML += '</div>';
        content.innerHTML += gridHTML;
    }

    // --- RENDER DẠNG MENU GIẤY (MÓN THỨ 7 TRỞ ĐI) ---
    if (listItems.length > 0) {
        let listHTML = '<div class="simple-list">';
        listItems.forEach(drink => {
            listHTML += `
                <div class="simple-item">
                    <span class="simple-name">${drink.name}</span>
                    <span class="simple-dots"></span>
                    <span class="simple-price">${drink.price}</span>
                </div>
            `;
        });
        listHTML += '</div>';
        content.innerHTML += listHTML;
    }

    wrapper.appendChild(content);
    section.appendChild(header);
    section.appendChild(wrapper);
    container.appendChild(section);

    // --- LOGIC CLICK XỔ XUỐNG ---
    header.addEventListener('click', () => {
        const isOpen = wrapper.classList.contains('open');
        
        // (Tùy chọn) Đóng tất cả các mục khác trước khi mở mục mới
        document.querySelectorAll('.category-content-wrapper').forEach(w => w.classList.remove('open'));
        document.querySelectorAll('.toggle-icon').forEach(i => i.style.transform = 'rotate(0deg)');
        
        if (!isOpen) {
            wrapper.classList.add('open');
            header.querySelector('.toggle-icon').style.transform = 'rotate(180deg)';
        }
    });

    isFirst = false;
}
