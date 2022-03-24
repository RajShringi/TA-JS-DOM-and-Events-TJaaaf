let firstBox = document.querySelector(".container").firstElementChild;

let firstAllBoxes = firstBox.querySelectorAll(".box");
firstAllBoxes.forEach((box, index) => {
  box.setAttribute("data-num", index + 1);
  box.addEventListener("click", handleClick);
});

let secondBox = document.querySelector(".container").lastElementChild;

let secondAllBoxes = secondBox.querySelectorAll(".box");
secondAllBoxes.forEach((box, index) => {
  box.setAttribute("data-num", index + 1);
});

secondBox.addEventListener("click", handleClick);

function handleClick(e) {
  e.target.innerText = e.target.dataset.num;
  setTimeout(() => {
    e.target.innerText = "";
  }, 2000);
}
