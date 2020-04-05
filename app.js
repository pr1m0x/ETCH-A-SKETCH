/* globals */
// ========================
// Variables
// ========================

// ========================
// Functions
// ========================

// ========================
// Loops
// ========================

// ========================
// Events
// ========================

// ========================
// Execution
// ========================

/**
 * Copy of the all-components.js to use the created functionalities if needed
 */

// ========================
// Variables
// ========================
const board = document.querySelector(".board");
const boxes = document.getElementsByClassName("box");

const themeSunset = ["#522d5b", "#d7385e", "#fb7b6b", "#e7d39f"];
const themeCandy = ["#f3d1f4", "#f5fcc1", "#bae5e5", "#98d6ea"];
let colorTheme = "random";
let counter = 0;

const btn_theme = document.querySelector(".btn__theme");
const btn_grid = document.querySelector(".btn__grid");
const btn_reset = document.querySelector(".btn__reset");

// ========================
// Functions
// ========================
function generateGrid(count) {
  let elements = "";
  board.setAttribute(
    "style",
    "grid-template: repeat(" +
      count +
      ", 1fr)" +
      " / " +
      "repeat(" +
      count +
      ", 1fr)"
  );
  for (let i = 0; i < count ** 2; i++) {
    elements += `<div class="box"></div>`;
  }
  board.innerHTML = elements;
}

function resetColors() {
  for (let item of boxes) {
    item.style.backgroundColor = "";
  }
}

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getThemeColor(theme) {
  let currentColor = "";
  if (counter !== 4) {
    currentColor = theme[counter];
    counter++;
  } else {
    counter = 0;
    currentColor = theme[counter];
  }
  return currentColor;
}
// ========================
// Loops
// ========================

// ========================
// Events & Logic
// ========================
board.addEventListener("mouseover", (e) => {
  switch (colorTheme) {
    case "random":
      e.target.style.backgroundColor = generateRandomColor();
      break;
    case "themeSunset":
      e.target.style.backgroundColor = getThemeColor(themeSunset);
      break;
    case "themeCandy":
      e.target.style.backgroundColor = getThemeColor(themeCandy);
      break;
  }
});

btn_theme.addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "sunset":
      colorTheme = "themeCandy";
      e.target.innerHTML = "candy";
      break;
    case "candy":
      colorTheme = "random";
      e.target.innerHTML = "random";
      break;
    default:
      colorTheme = "themeSunset";
      e.target.innerHTML = "sunset";
      break;
  }
});

btn_grid.addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "8 x 8":
      generateGrid(16);
      e.target.innerHTML = "16 x 16";
      break;
    case "16 x 16":
      generateGrid(32);
      e.target.innerHTML = "32 x 32";
      break;
    case "32 x 32":
      generateGrid(64);
      e.target.innerHTML = "64 x 64";
      break;
    case "64 x 64":
      generateGrid(128);
      e.target.innerHTML = "128 x 128";
      break;
    case "128 x 128":
      generateGrid(8);
      e.target.innerHTML = "8 x 8";
      break;
  }
});

btn_reset.addEventListener("click", (e) => {
  resetColors();
});

// ========================
// Execution
// ========================
generateGrid(16);
