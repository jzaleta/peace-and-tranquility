import './style.css';
import { music, phrases } from './dancin.js';
import { startDVDAnimation } from './eject.js';

document.addEventListener("DOMContentLoaded", function () {
  startDVDAnimation();
});

music();

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const beginSpan = document.createElement('span');
beginSpan.classList.add('begin', 'glitch');
beginSpan.setAttribute('data-text', 'Begin (with audio)');
beginSpan.innerText = 'Begin (with audio)';
containerDiv.appendChild(beginSpan);

document.body.appendChild(containerDiv);

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button');

const ejectSpan = document.createElement('span');
ejectSpan.classList.add('begin', 'glitch');
ejectSpan.setAttribute('data-text', 'EJECT?');

const ejectLink = document.createElement('a');
ejectLink.setAttribute('href', 'eject.html');
ejectLink.innerText = 'EJECT?';
ejectSpan.appendChild(ejectLink);

buttonDiv.appendChild(ejectSpan);

document.body.appendChild(buttonDiv);

const vcrOverlayDiv = document.createElement('div');
vcrOverlayDiv.classList.add('vcr-overlay');

document.body.appendChild(vcrOverlayDiv);

const importScript = document.createElement('script');
importScript.setAttribute('type', 'module');
importScript.innerHTML = `
import { getPhrase } from './dancin.js';

document.addEventListener('DOMContentLoaded', () => {
  const phraseBox = document.createElement('p');
  phraseBox.classList.add('phrase-box');
  document.querySelector('.container').appendChild(phraseBox);

  setInterval(() => {
    phraseBox.innerText = getPhrase();
  }, 6000);
});
`;

document.body.appendChild(importScript);

console.log(
  "%c Created by Javier Zaleta Martínez ",
  "color: #fff; background: hsl(0, 93%, 45%); padding: 5px 0;"
);
console.log();