let userSelect = "";
let computerSelect = "";
let userScore = 0;
let computerScore = 0;

let options = ["rock", "paper", "scissors"];

let showPlayerScore = document.querySelector(".player h3");
let showComputerScore = document.querySelector(".computer h3");
let showWinner = document.querySelector(".show-winner");

let restart = document.querySelector(".restart-container");

function getRandom() {
  return Math.floor(Math.random() * 3);
}

function selectWinner(userSelect, computerSelect) {
  if (userSelect === "rock" && computerSelect === "rock") {
    return "tie";
  } else if (userSelect === "rock" && computerSelect === "paper") {
    computerScore++;
    showComputerScore.innerText = `Computer --- ${computerScore}`;
    return "computer wins!";
  } else if (userSelect === "rock" && computerSelect === "scissors") {
    userScore++;
    showPlayerScore.innerText = `You --- ${userScore}`;
    return "user wins!";
  } else if (userSelect === "paper" && computerSelect === "rock") {
    userScore++;
    showPlayerScore.innerText = `You --- ${userScore}`;
    return "user wins!";
  } else if (userSelect === "paper" && computerSelect === "paper") {
    return "tie";
  } else if (userSelect === "paper" && computerSelect === "scissors") {
    computerScore++;
    showComputerScore.innerText = `Computer --- ${computerScore}`;
    return "computer wins!";
  } else if (userSelect === "scissors" && computerSelect === "rock") {
    computerScore++;
    showComputerScore.innerText = `Computer --- ${computerScore}`;
    return "comuter wins!";
  } else if (userSelect === "scissors" && computerSelect === "paper") {
    userScore++;
    showPlayerScore.innerText = `You --- ${userScore}`;
    return "user wins!";
  } else if (userSelect === "scissors" && computerSelect === "scissors") {
    return "tie";
  } else {
    return "click on rock paper scissors icons";
  }
}

let computerIcons = document.querySelectorAll(".computer .icons .fa");
function hightlightComputerIcon(computerSelect) {
  computerIcons.forEach((icon) => {
    if (icon.classList.contains(computerSelect)) {
      icon.classList.add("select");
    }
  });
}

// select icons to remove select class form icons
let allicons = document.querySelectorAll(".fa");
function removeSelect() {
  allicons.forEach((icon) => icon.classList.remove("select"));
}

let userIcons = document.querySelector(".player .icons");
userIcons.addEventListener("click", (e) => {
  removeSelect();

  //user select
  userSelect = e.target.classList[0];
  e.target.classList.add("select");

  //computer select
  let random = getRandom();
  // -- if same random come add random + 1 or return random so not every time same element select.
  random = options[random] === computerSelect ? random + 1 : random;
  // if random + 1 > 2 then random = 0 so it does not go out of range of array.
  random = random > 2 ? (random = 0) : random;
  computerSelect = options[random];
  hightlightComputerIcon(computerSelect);

  showWinner.innerText = selectWinner(userSelect, computerSelect);
});

restart.addEventListener("click", () => {
  removeSelect();
  userScore = 0;
  computerScore = 0;
  showPlayerScore.innerText = `You --- ${userScore}`;
  showComputerScore.innerText = `Computer --- ${computerScore}`;
  showWinner.innerText = "";
});
