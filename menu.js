const menu = {
    "Matcha Series": [
        { name: "Matcha Latte Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Matcha Latte", price: "M: $5.75 | L: $6.50" },
        { name: "Strawberry Matcha Latte", price: "M: $6.00 | L: $6.75" },
        { name: "Mango Matcha Latte", price: "M: $6.00 | L: $6.75" }
    ],
    "Coffee Series (Hot/Ice)": [
        { name: "Vietnamese Phin Coffee", price: "S: $4.00" },
        { name: "Bac Xiu Sweet Milk Coffee", price: "M: $5.00 | L: $5.75" },
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
        { name: "Brown Sugar Boba Milk", price: "$6.25" },
        { name: "Taro Milk Tea", price: "$6.25" },
        { name: "Earl Grey Milk Tea", price: "$5.75" },
        { name: "Thai Milk Tea", price: "$5.75" },
        { name: "Green Thai Milk Tea", price: "$5.75" }
    ],
    "Fruit Tea": [
        { name: "Fresh Fruit Tea", price: "$6.25" },
        { name: "Very Berry Tea", price: "$6.25" },
        { name: "Peach Orange Lemongrass Tea", price: "$6.25" },
        { name: "Peach Tea", price: "$5.75" },
        { name: "Strawberry Green Tea", price: "$5.75" },
        { name: "Mango Green Tea", price: "$5.75" },
        { name: "Kumquat Green Tea", price: "$5.75" },
        { name: "Pink Guava Green Tea", price: "$5.75" },
        { name: "Lychee Rose Tea", price: "$5.75" },
        { name: "Lemon Green Tea", price: "$5.75" },
        { name: "Lemon Thai Green Tea", price: "$5.75" }
    ],
    "Ice Blended": [
        { name: "Berry Mix Smoothie", price: "M: $6.00 | L: $6.75" },
        { name: "Tropical Smoothie", price: "M: $6.00 | L: $6.75" },
        { name: "Oreo Cookies Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Taro Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Strawberry Choco Frappe", price: "M: $6.00 | L: $6.75" },
        { name: "Mint Choco Frappe", price: "M: $6.00 | L: $6.75" }
    ],
    "Sparkling Creations": [
        { name: "Blue Sky Sparkler", price: "$6.25" },
        { name: "Lemon Sparkler", price: "$6.25" },
        { name: "Pink Guava Sparkler", price: "$6.25" },
        { name: "Peach Sparkler", price: "$6.25" }
    ],
    "Cold Brew Tea": [
        { name: "Jasmine Tea", price: "M: $4.25 | L: $5.00" },
        { name: "Oolong Tea", price: "M: $4.25 | L: $5.00" },
        { name: "Earl Grey Tea", price: "M: $4.25 | L: $5.00" }
    ],
    "Hot Drinks": [
        { name: "Chrysanthemum Tea", price: "M: $4.25" },
        { name: "Oolong Tea", price: "M: $4.25" },
        { name: "Jasmine Tea", price: "M: $4.25" },
        { name: "Ginger Tea", price: "M: $4.25" }
    ]
};

const container = document.getElementById("menu-container");

for (const category in menu) {
    const section = document.createElement("div");
    section.className = "category-section";

    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = category;
    section.appendChild(title);

    menu[category].forEach(drink => {
        const item = document.createElement("div");
        item.className = "menu-item";

        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="images/brown-sugar.png" style="width: 50px; height: 50px; object-fit: cover; border: 1px solid #eee;">
                <div class="item-info">
                    <span class="name">${drink.name}</span>
                </div>
            </div>
            <div class="item-price">${drink.price}</div>
        `;
        section.appendChild(item);
    });

    container.appendChild(section);
}
