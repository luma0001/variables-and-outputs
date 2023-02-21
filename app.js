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
  let messageString = `Taller er nu: ${number}`;
  document.querySelector("#message").textContent = messageString;
}

//Giver en error, da vi har en lokal variabel kalt uden for funktionen!
console.log(messageString);
