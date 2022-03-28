let images = [
  "./media/img/img1.jpg",
  "./media/img/img2.jpg",
  "./media/img/img3.jpg",
  "./media/img/img4.jpg",
  "./media/img/img5.jpg",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn = document.querySelector(".btn");

function handleClick() {
  let quoteIndex = getRandomIndex(data.quotes.length);
  let imgIndex = getRandomIndex(images.length);
  h1.innerText = data.quotes[quoteIndex].quote;
  p.innerText = data.quotes[quoteIndex].author;
  document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
  url(${images[imgIndex]}) no-repeat center center`;
  document.body.style.backgroundSize = "cover";
}
handleClick();
btn.addEventListener("click", handleClick);
