let movieList = document.querySelector(".movie-list");
let form = document.querySelector("form");
let movies = [];

function renderMovies() {
  let movieHtml = movies
    .map((movie, index) => {
      return `
      <li class="flex">
        <span>${movie}</span>
        <button class='btn ${index}'>❌</button>
      </li>
      `;
    })
    .join("");
  movieList.innerHTML = movieHtml;
}

function handleSubmit(e) {
  e.preventDefault();
  movies.push(e.target.elements.name.value);
  renderMovies();
  form.reset();
}

form.addEventListener("submit", handleSubmit);

movieList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    let index = e.target.classList[1];
    movies.splice(index, 1);
    renderMovies();
  }
});
