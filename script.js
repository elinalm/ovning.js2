"use strict";
let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");
let count = 0;
let div;
let nrOfCartitems;
let btn = document.getElementById("addToCart");
let imageurl = [
    "./assets/coffeecup1.jpg",
    "./assets/cofeecup2.jpg",
    "./assets/cofeecup3.jpg"
];
price1.addEventListener("click", (ev) => {
    let cup = document.querySelector("#heart1");
    cup.classList.toggle("red");
});
price2.addEventListener("click", (ev) => {
    let cup2 = document.querySelector("#heart2");
    cup2.classList.toggle("red");
});
price3.addEventListener("click", (ev) => {
    let cup2 = document.querySelector("#heart3");
    cup2.classList.toggle("red");
});
function openModal(imgUrl) {
    let modal = document.querySelector(".modal");
    let modalimg = document.querySelector(".modalImg");
    modalimg.src = imgUrl;
    modal.style.visibility = "visible";
}
function closeModal() {
    let modal = document.querySelector(".modal");
    modal.style.visibility = "hidden";
}
if (btn !== null) {
    btn.addEventListener("click", addToCart);
}
function addToCart() {
    var _a;
    if (count === 0) {
        div = document.querySelector(".fa-shopping-cart");
        nrOfCartitems = document.createElement("p");
        nrOfCartitems.className = "nrOfCartItems";
        (_a = div) === null || _a === void 0 ? void 0 : _a.appendChild(nrOfCartitems);
    }
    count++;
    nrOfCartitems.innerHTML = count.toString();
}
