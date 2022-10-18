const inputEl = document.querySelector('[data-length="6"]');
// console.log(inputEl.dataset.length);  // Вытащил значение 6 из дата атрибута [data-length="6"]
// console.log(inputEl.value.length);
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const addClass = nameClass => inputEl.classList.add(nameClass);
  const removeClass = nameClass => inputEl.classList.remove(nameClass);

  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    addClass('valid');
    removeClass('invalid');
    return;
  }
  if (inputEl.value.length === 0) {
    removeClass('valid');
    removeClass('invalid');
    return;
  }

  addClass('invalid');
  removeClass('valid');
}
