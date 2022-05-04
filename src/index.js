import { message } from "./app";
import "./style.css";
import "./style.scss";

const greet = "hello";

class Animal {
  sound() {
    console.log("bow wow");
  }
}

const animal = new Animal();

console.log(animal.sound());

console.log(greet);
console.log(message);
