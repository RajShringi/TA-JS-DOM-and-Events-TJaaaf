let form = document.querySelector("form");
let usernameError = "";
let emailError = "";
let phoneError = "";
let nameError = "";
let passwordError = "";
let afterSubmit = document.querySelector(".after_submit");

function everyWordIsNumber(elm) {
  return elm.value.split("").every((word) => Number(word));
}

function everyWordIsString(elm) {
  return elm.value.split("").every((word) => isNaN(word) || word === " ");
}
function handleSubmit(e) {
  e.preventDefault();
  let usernameElm = e.target.elements.username;
  let emailElm = e.target.elements.email;
  let phoneElm = e.target.elements.phoneNo;
  let nameElm = e.target.elements.name;
  let passwordElm = e.target.elements.password;
  let confirmPasswordElm = e.target.elements.confirm_password;

  // Username Error
  if (usernameElm.value.length < 4) {
    usernameError = `username can't be less than 4 characters`;
    usernameElm.classList.add("error");
  } else {
    usernameError = "";
    usernameElm.classList.remove("error");
    usernameElm.classList.add("success");
  }
  usernameElm.nextElementSibling.innerText = usernameError;

  //name error
  if (!everyWordIsString(nameElm)) {
    nameError = `You can't use number in the name field`;
    nameElm.classList.add("error");
  } else {
    nameError = "";
    nameElm.classList.add("success");
    nameElm.classList.remove("error");
  }
  nameElm.nextElementSibling.innerText = nameError;

  //Email Error
  if (emailElm.value.length < 6) {
    emailError = `email can't be less than 6 characters`;
    emailElm.classList.add("error");
  } else if (!emailElm.value.includes("@")) {
    emailError = `Not a valid email`;
    emailElm.classList.add("error");
  } else {
    emailError = "";
    emailElm.classList.add("success");
    emailElm.classList.remove("error");
  }
  emailElm.nextElementSibling.innerText = emailError;

  // Phone Error
  if (!everyWordIsNumber(phoneElm)) {
    phoneError = `Phone number can only contain numbers`;
    phoneElm.classList.add("error");
  } else {
    phoneError = "";
    phoneElm.classList.add("success");
    phoneElm.classList.remove("error");
  }
  phoneElm.nextElementSibling.innerText = phoneError;

  //password Error
  if (passwordElm.value !== confirmPasswordElm.value) {
    passwordError = `password and confirm password are not same`;
    confirmPasswordElm.classList.add("error");
  } else {
    passwordError = "";
    confirmPasswordElm.classList.add("success");
    confirmPasswordElm.classList.remove("error");
  }
  confirmPasswordElm.nextElementSibling.innerText = passwordError;

  if (
    usernameError === "" &&
    nameError === "" &&
    emailError === "" &&
    phoneError === "" &&
    passwordError === ""
  ) {
    afterSubmit.innerHTML = `<div class='user-submit'>User Added Successfully!</div>`;
  }
}

form.addEventListener("submit", handleSubmit);
