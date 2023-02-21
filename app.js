"use strict";
let number = 0;
//use strict ???

window.addEventListener("load", start);

function start() {
  document.querySelector("#btn-increment").addEventListener("click", add);
  document.querySelector("#btn-decrement").addEventListener("click", sub);
}

function add() {
  number = number + 1;
  console.log(number);
  display();
}

function sub() {
  number = number - 1;
  console.log(number);
  display();
}

function display() {
  document.querySelector("#number").textContent = number;
}
