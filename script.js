"use strict";

// Initialize grid
const containerSelector = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let addDiv = document.createElement("div");
    addDiv.className = "gridItem";
    containerSelector.append(addDiv);
  }
}

// Hover effect
const gridItems = document.querySelectorAll(".gridItem");

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.setAttribute("style", "background-color:blue");
  });
});
