// selectors

const container = document.querySelector("div.container");
const inputForm = document.querySelector("form.form");
const input = document.querySelector("input.input-field");
const submitBtn = document.querySelector(".submit-btn");
const userAlert = document.querySelector(".wrongInputInfo");

// FUNCTION FOR DYNAMICALLY CREATING THE GRID

x = 10;
pixMaxWidth = 60;

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
    // gridDiv.innerText = i;
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
  } else {
    userAlert.textContent = "Please select a number greater than 0";
  }
});
