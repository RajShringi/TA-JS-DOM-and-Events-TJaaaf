let housesList = document.querySelector(".houses-list");
let peopleList = document.querySelector(".people-list");

housesList.innerHTML = got.houses
  .map((house) => {
    return `
    <li class='btn btn-house'>${house.name}<li>
    `;
  })
  .join("");

let allPeople = got.houses.reduce((acc, cur) => {
  acc = [...acc, ...cur.people];
  return acc;
}, []);

function createUI(arr) {
  return arr
    .map((element) => {
      return `
        <li class="person">
            <img src=${element.image} alt =${element.name} />
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <a href=${element.wikiLink} class="btn">
            Know More
            </a>
        </li>
        `;
    })
    .join("");
}
peopleList.innerHTML = createUI(allPeople);

function handleClick(e) {
  let searchHouse = e.target.innerText;
  let arr = [];

  housesList.innerHTML = got.houses
    .map((house) => {
      if (house.name === searchHouse) {
        return `<li class='btn btn-house active'>${house.name}<li>`;
      }
      return `
    <li class='btn btn-house'>${house.name}<li>
    `;
    })
    .join("");

  arr = got.houses.filter((house) => {
    if (house.name === searchHouse) {
      return house;
    }
  });
  peopleList.innerHTML = createUI(arr[0].people);
}

housesList.addEventListener("click", handleClick);

let input = document.querySelector('input[type="text"]');

function handleSearch(e) {
  let searchKey = e.target.value;
  let filterPeople = allPeople.filter((person) => {
    return person.name.toLowerCase().includes(searchKey);
  });
  peopleList.innerHTML = createUI(filterPeople);
}
input.addEventListener("keyup", handleSearch);
