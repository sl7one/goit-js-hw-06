const btnElDecrements = document.querySelector('[data-action = "decrement"]');
const btnElIncrement = document.querySelector('[data-action = "increment"]');
const spanEl = document.querySelector('[id="value"]');

let counterValue = 0;

btnElDecrements.addEventListener('click', onClickDecrement);
btnElIncrement.addEventListener('click', onClickIncrement);

function onClickDecrement() {
  spanEl.textContent = counterValue -= 1;
}

function onClickIncrement() {
  spanEl.textContent = counterValue += 1;
}
