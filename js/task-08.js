const emailInputEl = document.querySelector('[name="email"]');
const passwordInputEl = document.querySelector('[name="password"]');
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitChange);

function onSubmitChange(event) {
  event.preventDefault();

  const data = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };

  if (!data.email || !data.password) {
    return alert('Не все поля заполнены');
  }

  console.log(data);

  formEl.reset();
}

//
