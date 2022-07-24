const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', formSubmit);

populateForm();

const formData = {};

function onInput (event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function formSubmit(event){
    event.preventDefault();
    console.log('email ',inputEl.value)
    console.log('message', messageEl.value);    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateForm () {    
    const newForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
 
 if (newForm) {
    const savedInput = newForm.email;
    inputEl.value = savedInput;
    const savedMessage = newForm.message;
    messageEl.value = savedMessage;
 };
};
