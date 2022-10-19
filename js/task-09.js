function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', onClick);

function onClick() {
  const spanEl = document.querySelector('.color');
  spanEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
