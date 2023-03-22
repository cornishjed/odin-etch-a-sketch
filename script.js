let boxCount = 0;

const button1 = document.querySelector("#getCount");
const button2 = document.querySelector("#reset");
const gridbox = document.getElementById("gridbox");

button1.addEventListener("click", function () {
  boxCount = prompt("Enter grid size");

  gridbox.replaceChildren();

  // create grid
  for (let y = 0; y < boxCount; y++) {
    const boxY = document.createElement("div");
    boxY.classList = "boxY";
    gridbox.appendChild(boxY);
    for (let x = 0; x < boxCount; x++) {
      const boxX = document.createElement("div");
      boxX.classList = "box";
      boxX.addEventListener("mouseover", function (e) {
        let randColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        boxX.style.backgroundColor = randColor;
      });
      boxY.appendChild(boxX);
    }
  }
});

button2.addEventListener("click", function () {
  const boxX = document.querySelector(".box");
  for (let y = 0; y < boxCount; y++) {
    for (let x = 0; x < boxCount; x++) {
      boxX.style.backgroundColor = "pink";
    }
  }
});
