const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const defaultSpan = spanEl.textContent;

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value;
  if (!spanEl.textContent) {
    spanEl.textContent = defaultSpan;
  }
}
