let boxes = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
  let randomNumber = Math.floor(Math.random() * 501);
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.innerText = randomNumber;
  boxes.append(box);
}

function generateRandomColor() {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 17);
    color += hex[random];
  }
  return color;
}

allbox = document.querySelectorAll(".box");
boxes.addEventListener("mousemove", () => {
  allbox.forEach((box) => {
    let randomColor = generateRandomColor();
    box.innerText = Math.floor(Math.random() * 501);
    box.style.background = randomColor;
  });
});
