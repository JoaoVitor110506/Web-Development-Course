const box = document.querySelector(".box");
const title = document.querySelector("h1");
const calculator = document.querySelector(".calculator");

console.log(box);
console.log(title.innerHTML);

box.innerHTML = "text";
box.innerHTML = "<p>Parágrafo</p>";
const pragraph = document.querySelector("p");

title.style.color = "red";
pragraph.style.color = "green";

for (let i = 0; i < 10; i++) {
  console.log(i);
  box.innerHTML += `<button class="btn">${i}</button>`;
}
const buttonsCalc = document.querySelectorAll(".btn");
buttonsCalc.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1) {
      num2 = Number(button.innerHTML);
    } else {
      num1 = Number(button.innerHTML);
    }
  });
});
let num1;
let num2;
function basic() {
  console.log(num1 + num2);
  num1 = null;
  num2 = null;
}
title.addEventListener("mouseeenter", () => {
  console.log(Title);
});
