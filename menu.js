const menu = {

"Matcha Series":[
{
name:"Matcha Latte",
price:"$5.75",
image:"images/drinks/matcha-latte.jpg"
},

{
name:"Strawberry Matcha Latte",
price:"$6.00",
image:"images/drinks/strawberry-matcha.jpg"
}
],

"Coffee Series":[
{
name:"Vietnamese Coffee",
price:"$5.00",
image:"images/drinks/vietnamese-coffee.jpg"
},

{
name:"Latte",
price:"$5.50",
image:"images/drinks/latte.jpg"
}
],

"Milk Tea":[
{
name:"Brown Sugar Boba Milk",
price:"$6.25",
image:"images/drinks/brown-sugar.jpg"
}
]

}



const container=document.getElementById("menu-container")

for(const category in menu){

const section=document.createElement("div")
section.className="category"

const title=document.createElement("h2")
title.textContent=category

section.appendChild(title)

menu[category].forEach(drink=>{

const item=document.createElement("div")
item.className="drink"

item.innerHTML=`

<img src="${drink.image}">

<div>${drink.name}</div>

<div class="price">${drink.price}</div>

`

section.appendChild(item)

})

container.appendChild(section)

}
