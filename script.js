"use strict";
let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");
let clicked = false;
price1.addEventListener("click", (ev) => {
    let cup = document.querySelector("#heart1");
    cup.classList.toggle("red");
    clicked = !clicked;
});
price2.addEventListener("click", (ev) => {
    let cup2 = document.querySelector("#heart2");
    cup2.classList.toggle("red");
    clicked = !clicked;
});
price3.addEventListener("click", (ev) => {
    let cup2 = document.querySelector("#heart3");
    cup2.classList.toggle("red");
    clicked = !clicked;
});
// price2.addEventListener("click", (ev: MouseEvent) => {
//   let cup2 = document.querySelector("#coffee2") as HTMLElement;
//   cup2.style.color = "red";
//   clicked = true;
// });
