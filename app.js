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

  if (number >= 10) {
    document.querySelector("#message").textContent =
      "Tallet er nu 10 eller mere";
  } else if (number < 0) {
    document.querySelector("#message").textContent = "Tallet er negativt";
  } else {
    document.querySelector("#message").textContent = messageString;
  }
}

//Giver en error, da vi har en lokal variabel kalt uden for funktionen!
// console.log(messageString);

let num = 11;
console.log(num);

if (num == 10) {
  console.log("tallet r 10 eller mindre");
}
