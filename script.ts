let heart1 = document.querySelector("#heart1") as HTMLElement;
let heart2 = document.querySelector("#heart2") as HTMLElement;
let heart3 = document.querySelector("#heart3") as HTMLElement;
let count = 0;
let div;
let nrOfCartitems: any;
let btn = document.getElementById("addToCart");
let imageurl: string[] = [
  "./assets/coffeecup1.jpg",
  "./assets/cofeecup2.jpg",
  "./assets/cofeecup3.jpg"
]

heart1.addEventListener("click", (ev: MouseEvent) => {
  let cup = document.querySelector("#heart1") as HTMLElement;
  cup.classList.toggle("red")

}); 

heart2.addEventListener("click", (ev: MouseEvent) => {
  let cup2 = document.querySelector("#heart2") as HTMLElement;
  cup2.classList.toggle("red")

}); 

heart3.addEventListener("click", (ev: MouseEvent) => {
  let cup2 = document.querySelector("#heart3") as HTMLElement;
  cup2.classList.toggle("red")

}); 


function openModal(imgUrl: string) {
  let modal = document.querySelector(".modal") as HTMLElement
  let modalimg = document.querySelector(".modalImg") as HTMLImageElement
  
  modalimg.src = imgUrl
  modal.style.visibility = "visible"
}

function closeModal() {
  let modal = document.querySelector(".modal") as HTMLElement
  modal.style.visibility = "hidden"
}


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

