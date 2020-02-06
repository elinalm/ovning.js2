let price1 = document.querySelector(".price1") as HTMLElement;
let price2 = document.querySelector(".price2") as HTMLElement;
let price3 = document.querySelector(".price3") as HTMLElement;
let clicked = false

price1.addEventListener("click", (ev: MouseEvent) => {
  let cup = document.querySelector("#heart1") as HTMLElement;
  cup.classList.toggle("red")
  clicked = !clicked;

}); 

price2.addEventListener("click", (ev: MouseEvent) => {
  let cup2 = document.querySelector("#heart2") as HTMLElement;
  cup2.classList.toggle("red")
  clicked = !clicked;

}); 

price3.addEventListener("click", (ev: MouseEvent) => {
  let cup2 = document.querySelector("#heart3") as HTMLElement;
  cup2.classList.toggle("red")
  clicked = !clicked;

}); 



// price2.addEventListener("click", (ev: MouseEvent) => {
//   let cup2 = document.querySelector("#coffee2") as HTMLElement;
//   cup2.style.color = "red";
//   clicked = true;
// });
