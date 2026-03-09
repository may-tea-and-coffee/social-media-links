const menu = {
    "Matcha Series": [
        { name: "Matcha Latte Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Matcha Latte", price: "M: $5.75 | L: $6.50" },
        { name: "Strawberry Matcha Latte", price: "M: $6.00 | L: $6.75" },
        { name: "Mango Matcha Latte", price: "M: $6.00 | L: $6.75" }
    ],
    "Coffee Series (Hot/Ice)": [
        { name: "Vietnamese Phin Coffee", price: "S: $4.00" },
        { name: "Bac Xiu Sweet Milk", price: "M: $5.00 | L: $5.75" },
        { name: "Vietnamese Milk Coffee", price: "S: $4.50" },
        { name: "Salted Cream Coffee", price: "M: $5.25 | L: $6.00" },
        { name: "Americano", price: "M: $4.00 | L: $4.75" },
        { name: "Mocha", price: "M: $5.50 | L: $6.25" },
        { name: "Caramel Frappe", price: "M: $5.50 | L: $6.25" },
        { name: "Mocha Frappe", price: "M: $5.50 | L: $6.25" },
        { name: "Latte", price: "M: $4.75 | L: $5.50" },
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
        { name: "Peach Lemongrass", price: "$6.25" },
        { name: "Peach Tea", price: "$5.75" },
        { name: "Strawberry Green Tea", price: "$5.75" },
        { name: "Mango Green Tea", price: "$5.75" },
        { name: "Kumquat Green Tea", price: "$5.75" },
        { name: "Pink Guava Green Tea", price: "$5.75" },
        { name: "Lychee Rose Tea", price: "$5.75" }
    ],
    "Ice Blended": [
        { name: "Berry Mix Smoothie", price: "M: $6.00 | L: $6.75" },
        { name: "Tropical Smoothie", price: "M: $6.00 | L: $6.75" },
        { name: "Oreo Cookies Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Taro Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Strawberry Choco", price: "M: $6.00 | L: $6.75" },
        { name: "Mint Choco Frappe", price: "M: $6.00 | L: $6.75" }
    ],
    "Sparkling Creations": [
        { name: "Blue Sky Sparkler", price: "$6.25" },
        { name: "Lemon Sparkler", price: "$6.25" },
        { name: "Pink Guava Sparkler", price: "$6.25" },
        { name: "Peach Sparkler", price: "$6.25" }
    ],
    "Cold Brew & Hot Drinks": [
        { name: "Jasmine Cold Brew", price: "M: $4.25 | L: $5.00" },
        { name: "Oolong Cold Brew", price: "M: $4.25 | L: $5.00" },
        { name: "Earl Grey Cold Brew", price: "M: $4.25 | L: $5.00" },
        { name: "Chrysanthemum Hot", price: "M: $4.25" },
        { name: "Ginger Hot Tea", price: "M: $4.25" }
    ]
};

// Hàm xử lý giá xếp dọc, xóa dấu ":" thừa
function formatCardPrice(priceString) {
    if (priceString.includes('|')) {
        const sizes = priceString.split('|');
        let html = '<div class="card-price-stacked">';
        sizes.forEach(size => {
            const cleanSize = size.trim().replace(':', '');
            html += `<span>${cleanSize}</span>`;
        });
        html += '</div>';
        return html;
    } 
    else {
        const cleanSize = priceString.replace(':', '');
        return `<div class="card-price-stacked"><span>${cleanSize}</span></div>`;
    }
}

const container = document.getElementById("menu-container");
let isFirst = true;

for (const category in menu) {
    const items = menu[category];
    
    const section = document.createElement("div");
    section.className = "category-section";

    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `
        <h2>${category}</h2>
        <i class="fa-solid fa-chevron-down toggle-icon" style="${isFirst ? 'transform: rotate(180deg)' : ''}"></i>
    `;

    const wrapper = document.createElement("div");
    wrapper.className = `category-content-wrapper ${isFirst ? 'open' : ''}`;
    
    const content = document.createElement("div");
    content.className = "category-content";

    const cardItems = items.slice(0, 6);
    const listItems = items.slice(6);

    if (cardItems.length > 0) {
        let gridHTML = '<div class="card-grid">';
        cardItems.forEach(drink => {
            const imgPath = drink.image ? drink.image : "images/brown-sugar.png";
            gridHTML += `
                <div class="drink-card">
                    <div class="card-name">${drink.name}</div>
                    <div class="card-body">
                        <img src="${imgPath}" alt="${drink.name}">
                        <div class="card-info">
                            <div class="card-desc">Premium quality blend</div>
                            ${formatCardPrice(drink.price)}
                        </div>
                    </div>
                </div>
            `;
        });
        gridHTML += '</div>';
        content.innerHTML += gridHTML;
    }

    if (listItems.length > 0) {
        let listHTML = '<div class="simple-list">';
        listItems.forEach(drink => {
            // Đối với Menu giấy dạng list, ta giữ nguyên chuỗi giá
            listHTML += `
                <div class="simple-item">
                    <span class="simple-name">${drink.name}</span>
                    <span class="simple-dots"></span>
                    <span class="simple-price">${drink.price.replace(':', '')}</span>
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

    header.addEventListener('click', () => {
        wrapper.classList.toggle('open');
        const isOpen = wrapper.classList.contains('open');
        header.querySelector('.toggle-icon').style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    isFirst = false;
}
