const menuData = {

"Milk Tea":[
{name:"Classic Milk Tea", price:"$5"},
{name:"Brown Sugar Milk Tea", price:"$5.5"},
{name:"Taro Milk Tea", price:"$5.5"}
],

"Fruit Tea":[
{name:"Peach Tea", price:"$5"},
{name:"Mango Tea", price:"$5"},
{name:"Passion Fruit Tea", price:"$5"}
],

"Coffee":[
{name:"Vietnamese Coffee", price:"$5"},
{name:"Iced Latte", price:"$5.5"}
],

"Special":[
{name:"Durian Smoothie", price:"$6"},
{name:"Avocado Smoothie", price:"$6"}
]

}

const menuContainer=document.getElementById("menu")

for(const category in menuData){

const section=document.createElement("div")
section.className="category"

const title=document.createElement("h2")
title.textContent=category
section.appendChild(title)

menuData[category].forEach(item=>{

const div=document.createElement("div")
div.className="item"

div.innerHTML=`
<span>${item.name}</span>
<span class="price">${item.price}</span>
`

section.appendChild(div)

})

menuContainer.appendChild(section)

}
