import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateData();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

function populateData() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    email.value = parsedData.email || '';
    message.value = parsedData.message || '';
  }
}
