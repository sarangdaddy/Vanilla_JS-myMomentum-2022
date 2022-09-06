const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const home = document.querySelector(".home");
const welcomeUserName = document.querySelector(".header_welcome_username");
const logoutButton = home.querySelector(".logout_button");
const body = document.body;

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  body.classList.add("home__body");
  body.classList.remove("login__body");
  loginForm.classList.add(HIDDEN_KEY);
  const inputValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputValue);
  paintUserName(inputValue);
}

function paintUserName(username) {
  welcomeUserName.innerText = `Welcome ${username}`;
  home.classList.remove(HIDDEN_KEY);
}

function handelLogoutClick() {
  body.classList.remove("home__body");
  body.classList.add("login__body");
  loginForm.classList.remove(HIDDEN_KEY);
  home.classList.add(HIDDEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
}

logoutButton.addEventListener("click", handelLogoutClick);

const localStorageUsername = localStorage.getItem(USERNAME_KEY);

if (localStorageUsername === null) {
  loginForm.classList.remove(HIDDEN_KEY);
  body.classList.remove("home__body");
  body.classList.add("login__body");
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintUserName(localStorageUsername);
}
