"use strict";

// Initialize grid
const containerSelector = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  let addDiv = document.createElement("div");
  addDiv.style.height = `calc(100% / 16)`;
  addDiv.style.flex = `1 0 calc(100% / 16)`;
  addDiv.className = "gridItem";
  containerSelector.append(addDiv);
}

// Hover effect
let gridItems = document.querySelectorAll(".gridItem");

// Random RGB color
function randomColor() {
  const min = 0;
  const max = 256;
  return String(Math.floor(Math.random() * (max - min) + min));
}

console.log(randomColor());
console.log(typeof randomColor());

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  });
});

// Resize button functionality
const btnResizeSelector = document.querySelector(".btn-resize");

btnResizeSelector.addEventListener("click", () => {
  let inputDimension = Number(prompt("Enter a number up to 100:"));

  // Delete old grid
  gridItems = document.querySelectorAll(".gridItem");

  gridItems.forEach((item) => {
    item.remove();
  });

  // Create new grid
  for (let i = 0; i < Number(inputDimension) * Number(inputDimension); i++) {
    let addDiv = document.createElement("div");
    addDiv.className = "gridItem";
    addDiv.style.height = `calc(100% / ${inputDimension})`;
    addDiv.style.flex = `1 0 calc(100% / ${inputDimension})`;
    containerSelector.append(addDiv);
  }

  // Hover effect
  gridItems = document.querySelectorAll(".gridItem");

  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    });
  });
});
