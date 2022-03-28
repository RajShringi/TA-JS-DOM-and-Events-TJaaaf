let first = document.querySelector(".first");
let second = document.querySelector(".second");

first.addEventListener("click", () => {
  let r = parseInt(Math.random() * 256);
  let g = parseInt(Math.random() * 256);
  let b = parseInt(Math.random() * 256);
  first.style.background = `rgb(${r}, ${g}, ${b})`;
});

second.addEventListener("mousemove", () => {
  let r = parseInt(Math.random() * 256);
  let g = parseInt(Math.random() * 256);
  let b = parseInt(Math.random() * 256);
  second.style.background = `rgb(${r}, ${g}, ${b})`;
});
