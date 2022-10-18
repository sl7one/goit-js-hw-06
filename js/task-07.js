const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('span');

rangeEl.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  spanEl.style.fontSize = `${event.target.value}px`;
}
