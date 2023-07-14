import './style.css'
import { music, phrases } from './dancin.js';
import { startDVDAnimation } from './eject.js';

document.addEventListener("DOMContentLoaded", function () {
  startDVDAnimation();
});

music();

console.log(
  "%c Created by Javier Zaleta Martínez ",
  "color: #fff; background: hsl(0, 93%, 45%); padding: 5px 0;"
);
console.log();