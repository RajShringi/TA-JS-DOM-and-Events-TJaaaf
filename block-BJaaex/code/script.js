const cardsArray = [
  {
    name: "at-symbol",
    img: `media/img/at-symbol.svg`,
  },
  {
    name: "backspace",
    img: `media/img/backspace.svg`,
  },
  {
    name: "beaker",
    img: `media/img/beaker.svg`,
  },
  {
    name: "bell",
    img: `media/img/bell.svg`,
  },
  {
    name: "briefcase",
    img: `media/img/briefcase.svg`,
  },
  {
    name: "camera",
    img: `media/img/camera.svg`,
  },
  {
    name: "chartbar",
    img: `media/img/chartbar.svg`,
  },
  {
    name: "chat",
    img: `media/img/chat.svg`,
  },
];
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());
let game = document.querySelector(".game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.append(grid);

gameGrid.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");

  back.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;

  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};

let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousTarget = null;
let delay = 1200;

grid.addEventListener("click", function (event) {
  // The event target is our clicked item
  let clicked = event.target;
  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected")
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      // Assign second guess
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    // If both guesses are not empty...
    if (firstGuess !== "" && secondGuess !== "") {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    // Set previous target to clicked
    previousTarget = clicked;
  }
});
