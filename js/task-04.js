const btnEl = document.querySelectorAll('#counter > button');
const spanEl = document.querySelector('#counter > #value');
let counterValue = Number(spanEl.textContent);

btnEl[0].addEventListener('click', onClickDecrement);
btnEl[1].addEventListener('click', onClickIncrement);

function onClickDecrement() {
  spanEl.textContent = counterValue -= 1;
}

function onClickIncrement() {
  spanEl.textContent = counterValue += 1;
}

// btnEl[0].addEventListener('click', () => {
//   spanEl.textContent = counterValue -= 1;
// });
// btnEl[1].addEventListener('click', () => {
//   spanEl.textContent = counterValue += 1;
// });
