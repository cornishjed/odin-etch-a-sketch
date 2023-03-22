let boxCount = 0;

const button = document.querySelector("#getCount");

button.addEventListener("click", function () {
  boxCount = prompt("Enter grid size");
  console.log(boxCount);

  const gridbox = document.getElementById("gridbox");

  gridbox.replaceChildren();

  // create grid
  for (let y = 0; y < boxCount; y++) {
    const boxY = document.createElement("div");
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
