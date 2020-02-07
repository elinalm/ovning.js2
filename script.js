"use strict";
window.addEventListener("load", startOfProgram);
function startOfProgram() {
    count = Number(localStorage.getItem("cartCount")) || 0;
    updateCartCount();
}
let heart1 = document.querySelector("#heart1");
let heart2 = document.querySelector("#heart2");
let heart3 = document.querySelector("#heart3");
let count;
let div;
let nrOfCartitems;
let btns = document.querySelectorAll(".addToCart");
let btn2 = document.querySelector(".addToCart2");
let btn3 = document.querySelector(".addToCart3");
document.getElementsByName;
let imageurl = [
    "./assets/coffeecup1.jpg",
    "./assets/cofeecup2.jpg",
    "./assets/cofeecup3.jpg"
];
heart1.addEventListener("click", (ev) => {
    let cup = document.querySelector("#heart1");
    cup.classList.toggle("red");
});
heart2.addEventListener("click", (ev) => {
    let cup2 = document.querySelector("#heart2");
    cup2.classList.toggle("red");
});
heart3.addEventListener("click", (ev) => {
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
for (const btn of btns) {
    btn.addEventListener("click", addToCart);
}
function addToCart() {
    count++;
    localStorage.setItem("cartCount", count.toString());
    updateCartCount();
}
function updateCartCount() {
    var _a;
    if (count > 0) {
        if (!nrOfCartitems) {
            div = document.querySelector(".fa-shopping-cart");
            nrOfCartitems = document.createElement("p");
            nrOfCartitems.className = "nrOfCartItems";
            (_a = div) === null || _a === void 0 ? void 0 : _a.appendChild(nrOfCartitems);
        }
        nrOfCartitems.innerHTML = count.toString();
    }
}
//# sourceMappingURL=script.js.map