"use strict";

const containerSelector = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let addDiv = document.createElement("div");
    addDiv.className = "gridItem";
    containerSelector.append(addDiv);
  }
}
const divSelector = document.querySelector(".gridItem");
divSelector.addEventListener("click", sayHello);

function sayHello() {
  console.log("SUP");
}
