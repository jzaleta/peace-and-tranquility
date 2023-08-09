import './style.css';
import { dancin, start, updatePhrase } from './dancin.js';

// Notes so I don't forget what does this code do:

const cornerDiv = document.createElement('div');
cornerDiv.className = 'corner';

// Create a div with class "container"
const containerDiv = document.createElement('div');
containerDiv.className = 'container';

// Create a span with the class "begin glitch" 
const beginSpan = document.createElement('span');
beginSpan.className = 'begin glitch';
beginSpan.setAttribute('data-text', 'Begin (with audio)');
beginSpan.textContent = 'Begin (with audio)';
containerDiv.appendChild(beginSpan);

// Create a div with the class "button"
const buttonDiv = document.createElement('div');
buttonDiv.className = 'button';

// Create a span with class "begin glitch" and set the data-text attribute
const ejectSpan = document.createElement('span');
ejectSpan.className = 'begin glitch';
ejectSpan.setAttribute('data-text', 'EJECT?');

// Create an anchor element with href to "eject.html" and set its text content
// Remember to link eject.html later
const ejectLink = document.createElement('a');
ejectLink.href = 'eject.html';
ejectLink.textContent = 'EJECT?';
ejectSpan.appendChild(ejectLink);
buttonDiv.appendChild(ejectSpan);

// Create a div element with the class "vcr-overlay"
const overlayDiv = document.createElement('div');
overlayDiv.className = 'vcr-overlay';

// Append the created elements to the body or any other desired element
document.body.appendChild(cornerDiv);
document.body.appendChild(containerDiv);
document.body.appendChild(buttonDiv);
document.body.appendChild(overlayDiv);


document.querySelector('.begin').onclick = start;
window.onload = () => {
  if (window.location.hash != '') {
    start();
  }
};

console.log(
  "%c Created by Javier Zaleta Martínez ",
  "color: #fff; background: hsl(0, 93%, 45%); padding: 5px 0;"
);
console.log();
