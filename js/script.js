const DELAY_REMOVE = 400;

document.addEventListener(`DOMContentLoaded`, () => {
  document.querySelectorAll(`.click-elem`).forEach((elem) => {
    elem.addEventListener(`click`, (event) => {
      elem.style.setProperty("--click-coordinate-x", `${event.pageX}px`);
      elem.style.setProperty("--click-coordinate-y", `${event.pageY - 10}px`);
      elem.classList.add(`clicked`);

      setTimeout(() => elem.classList.remove(`clicked`), DELAY_REMOVE);
    });
  });
});
