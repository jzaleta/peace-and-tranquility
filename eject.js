// You just ejected this site, there's nothing else to do here.
// As you reflect on the reasons behind your actions;
// take a moment to explore this now forgotten code snippet:

export function startDVDAnimation() {
  const dvd = document.getElementById("dvd");
  let intervalId;
  let xIncr = 1;
  let yIncr = 1;

  function init() {
    updateColor();
    dvd.style.position = "absolute";
    document.body.style.background = "#0a0a0a";
    intervalId = setInterval(frame, 5);
  }

  function updateColor() {
    const color = Math.floor(Math.random() * 100);
    dvd.style.fill = `hsl(${color},100%,50%)`;
  }

  function handleCollision() {
    const dvdHeight = dvd.offsetHeight;
    const dvdWidth = dvd.offsetWidth;
    const left = dvd.offsetLeft;
    const top = dvd.offsetTop;
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    if (left <= 0 || left + dvdWidth >= winWidth) {
      xIncr *= -1;
      updateColor();
    }
    if (top <= 0 || top + dvdHeight >= winHeight) {
      yIncr *= -1;
      updateColor();
    }
  }

  function frame() {
    handleCollision();
    dvd.style.top = dvd.offsetTop + yIncr + "px";
    dvd.style.left = dvd.offsetLeft + xIncr + "px";
  }

  init();
}
