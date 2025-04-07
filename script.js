// selectors

const container = document.body.querySelector("div.container");
console.log(container);

// function for creating grid
i = 0;
x = 4;
y = 4;
pixMax = 900;
container.setAttribute("style", `width: ${pixMax}px`);
for (i; i < x * y; i++) {
  gridDiv = document.createElement("div");
  container.appendChild(gridDiv);
  //   gridDiv.innerText = "hi";
  gridDiv.classList = "grid grid-border";
  gridDiv.setAttribute(
    "style",
    `min-width: ${pixMax / x}px;
    min-height: 30px`
  );
  //   gridDiv.setAttribute("style", "background-color: black; color: pink");
}
