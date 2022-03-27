let inputbox = document.querySelector('input[type="text"]');
let root = document.querySelector(".todo-list");
let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

function handleDelete(e) {
  let index = e.target.dataset.id;
  allTodos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUI(allTodos, root);
}

function handleToggle(e) {
  let index = e.target.dataset.id;
  allTodos[index].isDone = !allTodos[index].isDone;
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUI(allTodos, root);
}

function createUI(arr, rootElm) {
  rootElm.innerHTML = "";
  arr.forEach((todo, i) => {
    let li = document.createElement("li");
    li.setAttribute("class", "flex");
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;
    input.setAttribute("data-id", i);
    input.addEventListener("input", handleToggle);

    let todoSpan = document.createElement("span");
    todoSpan.innerText = todo.name;
    div.append(input, todoSpan);

    let deleteSpan = document.createElement("span");
    deleteSpan.innerText = "❌";
    deleteSpan.setAttribute("data-id", i);
    deleteSpan.setAttribute("class", "btn-delete");
    deleteSpan.addEventListener("click", handleDelete);
    li.append(div, deleteSpan);
    root.append(li);
  });
}

function handleSubmit(e) {
  if (e.keyCode === 13 && e.target.value !== "") {
    let value = e.target.value;
    allTodos.push({
      name: value,
      isDone: false,
    });
    localStorage.setItem("todos", JSON.stringify(allTodos));
    createUI(allTodos, root);
    e.target.value = "";
  }
}

function handleActive() {
  let active = allTodos.filter((todo) => todo.isDone === false);
  createUI(active, root);
}

function handleCompleted() {
  let completed = allTodos.filter((todo) => todo.isDone);
  createUI(completed, root);
}

function handleAll() {
  createUI(allTodos, root);
}

let btnActive = document.querySelector(".btn-active");
btnActive.addEventListener("click", handleActive);

let btnCompleted = document.querySelector(".btn-completed");
btnCompleted.addEventListener("click", handleCompleted);

let btnAll = document.querySelector(".btn-all");
btnAll.addEventListener("click", handleAll);

inputbox.addEventListener("keyup", handleSubmit);
createUI(allTodos, root);

let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUI(allTodos, root);
});
