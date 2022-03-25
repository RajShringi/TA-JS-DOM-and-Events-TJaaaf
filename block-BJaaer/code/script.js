let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let userInfo = {};

function handleSubmit(e) {
  e.preventDefault();
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.love = form.elements.movies.value;
  userInfo.color = form.elements.color.value;
  userInfo.rating = form.elements.range.value;
  userInfo.genre = form.elements.drone.value;
  userInfo.term = form.elements.terms.checked;
  modal.style.display = "block";
  modal.innerHTML = `
  <div class='card'>
    <button class='btn'>Close</button>
    <h1>Hello ${userInfo.name}</h1>
    <p>Email: ${userInfo.email}</p>
    <p>Your Love: ${userInfo.love}</p>
    <p>Color: ${userInfo.color}</p>
    <p>Color: ${userInfo.color}</p>
    <p>Book Genre: ${userInfo.genre}</p>
    <a>${
      userInfo.term
        ? "👉 You agree terms and conditions"
        : "👉 You do not agree terms and conditions"
    }</a>
  </div>
  `;
  let btn = modal.querySelector(".btn");
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

form.addEventListener("submit", handleSubmit);
