"use strict";
let count = 0;
let div;
let nrOfCartitems;
let btn = document.getElementById("addToCart");
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
