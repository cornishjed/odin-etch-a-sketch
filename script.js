let boxCount = 0;
const gridbox = document.getElementById("gridbox");
const button1 = document.querySelector("#getCount");
const button2 = document.querySelector("#reset");

function createGrid() {
  gridbox.replaceChildren();
  for (let y = 0; y < boxCount; y++) {
    const boxY = document.createElement("div");
    boxY.classList = "boxY";
    gridbox.appendChild(boxY);
    for (let x = 0; x < boxCount; x++) {
      const boxX = document.createElement("div");
      boxX.classList = "box";
      boxX.style.backgroundColor = "white";
      boxX.addEventListener("mouseover", function (e) {
        let randColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        boxX.style.backgroundColor = randColor;
      });
      boxY.appendChild(boxX);
    }
  }
}

button1.addEventListener("click", function () {
  boxCount = prompt("Enter grid size");
  if (boxCount > 100) {
    alert("Limit exceeded. Maximum allowed is 100.")
    boxCount = 100;
  }
  createGrid();
});

button2.addEventListener("click", function () {
  createGrid();
});
