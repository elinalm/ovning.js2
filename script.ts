let price1 = document.querySelector(".price1") as HTMLElement;
let price2 = document.querySelector(".price2") as HTMLElement;
let price3 = document.querySelector(".price3") as HTMLElement;
let count = 0;
let div;
let nrOfCartitems: any;
let btn = document.getElementById("addToCart");

price1.addEventListener("click", (ev: MouseEvent) => {
  let cup = document.querySelector("#heart1") as HTMLElement;
  cup.classList.toggle("red")

}); 

price2.addEventListener("click", (ev: MouseEvent) => {
  let cup2 = document.querySelector("#heart2") as HTMLElement;
  cup2.classList.toggle("red")

}); 

price3.addEventListener("click", (ev: MouseEvent) => {
  let cup2 = document.querySelector("#heart3") as HTMLElement;
  cup2.classList.toggle("red")

}); 



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
