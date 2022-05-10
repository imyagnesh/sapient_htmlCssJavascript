import "./styles/index.scss";
import Register from "./register";

const register = new Register();

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", register.submit);
