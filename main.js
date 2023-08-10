import "./style.css";
import { dancin, start, updatePhrase } from "./dancin.js";

document.querySelector(".begin").onclick = start;
window.onload = () => {
  if (window.location.hash != "") {
    start();
  }
};

console.log(
  "%c Created by Javier Zaleta Martínez ",
  "color: #fff; background: hsl(0, 93%, 45%); padding: 5px 0;"
);
console.log();
