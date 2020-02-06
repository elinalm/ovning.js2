let count = 0;
let div;
let nrOfCartitems: any;

let btn = document.getElementById("addToCart");
if (btn !== null) {
  btn.addEventListener("click", addToCart);
}

function addToCart() {
  if (count === 0) {
    div = document.querySelector(".fa-shopping-cart");
    nrOfCartitems = document.createElement("p");
    nrOfCartitems.className = "nrOfCartItems";
    div?.appendChild(nrOfCartitems);
  }
  count++;
  nrOfCartitems.innerHTML = count.toString();
}
