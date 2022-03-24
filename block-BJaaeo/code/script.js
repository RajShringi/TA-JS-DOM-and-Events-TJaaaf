let numbers = document.querySelector(".numbers-container");
let operation = document.querySelector(".operation-container");

let output = document.querySelector(".output");
output.innerText = "";

numbers.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-clear")) {
    output.innerText = "";
    return;
  }
  output.innerText += `${e.target.dataset.num}`;
});

operation.addEventListener("click", (e) => {
  output.innerText += `${e.target.dataset.op}`;
});

let equal = document.querySelector(".btn-equal");
equal.addEventListener("click", () => {
  output.innerText = eval(output.innerText);
});
