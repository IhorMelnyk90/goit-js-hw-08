const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', formSubmit);

populateForm();

const formData = {};

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function formSubmit(event) {
    event.preventDefault();
    formData.email = inputEl.value;
    formData.message = messageEl.value;
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

};

function populateForm() {
    let initForm = localStorage.getItem(STORAGE_KEY);
    if (initForm) {
        const newForm = JSON.parse(initForm);

        const newEmail = newForm.email;
        inputEl.value = newEmail;

        const newMessage = newForm.message;
        messageEl.value = newMessage;

    };
};
