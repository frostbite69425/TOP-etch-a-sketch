// function to debug

function log(x) {
  console.log(x);
}

// selectors

const container = document.querySelector("div.container");
const inputForm = document.querySelector("form.form");
const input = document.querySelector("input.input-field");
const submitBtn = document.querySelector(".submit-btn");
const userAlert = document.querySelector(".wrongInputInfo");

// FUNCTION FOR DYNAMICALLY CREATING THE GRID

x = 10;
pixMaxWidth = 40;

function generateGrid() {
  container.setAttribute("style", `width: ${pixMaxWidth}vw`);
  for (i = 0; i < x ** 2; i++) {
    gridDiv = document.createElement("div");
    container.appendChild(gridDiv);
    gridDiv.classList = "grid grid-border";
    gridDiv.setAttribute(
      "style",
      `min-width: ${pixMaxWidth / x}vw;
    min-height:${pixMaxWidth / x}vw`
    );
    gridDiv.style.opacity = 0;
  }
}
generateGrid();

// FUNCTION FOR CHANGING THE GRID DENSITY UPON DETECTING USER INPUT

inputForm.addEventListener("submit", (e) => {
  x = input.value;
  console.log(x);
  e.preventDefault();
  if (x > 0) {
    userAlert.innerHTML = "";
    container.innerHTML = "";
    generateGrid();
    inputForm.reset();
    input.focus();
    colourGrid();
  } else {
    userAlert.textContent = "Please select a number greater than 0";
  }
});

// FUNCTION THAT CHANGES THE COLOUR OF THE GRID ON MOUSEHOVER

function colourGrid() {
  gridBox = document.querySelectorAll("div.grid");

  gridBox.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `rgb(${randomNumGenerator()}, ${randomNumGenerator()}, ${randomNumGenerator()})`;
      boxStyles = window.getComputedStyle(box);
      opacityValue = boxStyles.getPropertyValue("opacity");
      log(opacityValue);
      if (opacityValue <= 1) {
        box.style.opacity = Number(opacityValue + 0.1);
      }
    });
  });
}

colourGrid();

// FUNCTION TO RANDOMISE COLOR

function randomNumGenerator() {
  return Math.floor(Math.random() * 255);
}
