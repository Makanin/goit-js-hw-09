const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';


function autoFill() {
  const saveData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  if (saveData.email) {
    form.elements.email.value = saveData.email;
    formData.email = saveData.email;
  }
  if (saveData.message) {
    form.elements.message.value = saveData.message;
    formData.message = saveData.message;
  }
}

autoFill();


form.addEventListener('input', evt => {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
  } else if (evt.target.name === 'message') {
    formData.message = evt.target.value;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  console.log(localStorage);
});
console.log(localStorage);


form.addEventListener('submit', evt => {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(`email: ${evt.target.elements.email.value}`);
  console.log(`message: ${evt.target.elements.message.value}`);
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});