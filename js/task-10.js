function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const clearBtnEl = document.querySelector('[data-destroy]');
const parentBoxesEl = document.querySelector('[id="boxes"]');

createBtnEl.addEventListener('click', onClickCreate);
clearBtnEl.addEventListener('click', onClickClear);

function onClickCreate() {
  const counter = inputEl.value;
  destroyBoxes(); // clear render before create
  createBoxes(counter);
}

function onClickClear() {
  inputEl.value = '';
  destroyBoxes();
}

function createBoxes(amount) {
  let markUp = '';
  // default sizes of first box
  const sizes = {
    width: 30,
    height: 30,
  };
  // create markup for div parent
  for (let i = 0; i < amount; i += 1) {
    markUp += `<div style='background-color:${getRandomHexColor()}; width:${
      sizes.width
    }px; height:${sizes.height}px;'></div>`;
    // increment sizes
    sizes.width += 10;
    sizes.height += 10;
  }

  // insert to parent div
  parentBoxesEl.insertAdjacentHTML('afterbegin', markUp);
}

function destroyBoxes() {
  parentBoxesEl.innerHTML = '';
}
