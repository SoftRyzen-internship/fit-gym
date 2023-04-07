import { handlePopUp } from "./popUp";
import {checkInputName, checkInputEmail } from "./validation";

const contactsForm = document.getElementById('contacts-form');
const contactsBtn = document.querySelector('.contacts__send');

const contactsName = document.getElementById('contacts-name');
const contactsEmail = document.getElementById('contacts-email');
const contactsMessage = document.getElementById('contacts-message');

export const disableBtnSubmit = (btn) => {
  btn.setAttribute('disabled', 'disabled');
  btn.classList.add('button--disabled');
  btn.classList.remove('button--primary');
}

export const enableBtnSubmit = (btn) => {
  btn.removeAttribute('disabled');
  btn.classList.remove('button--disabled');
  btn.classList.add('button--primary');
}

export const resetForm = (btn, form) => {
  form.reset();
  disableBtnSubmit(btn);
  const array = form.querySelectorAll('.success');
  Array.from(array).map(item => item.classList.remove('success'));
}

const isContactsValidValues = {
  contactsName: false,
  contactsEmail: false,
};

contactsForm.addEventListener('input', e => {
  if (e.target.id === 'contacts-name') {
    const isValidName = checkInputName(e.target.value, contactsName);

    if (isValidName) {
      isContactsValidValues.contactsName = true;
    }
    if (!isValidName) {
      isContactsValidValues.contactsName = false;
    }
  }

  if (e.target.id === 'contacts-email') {
    const isValidEmail = checkInputEmail(e.target.value, contactsEmail);

    if (isValidEmail) {
      isContactsValidValues.contactsEmail = true;
    }
    if (!isValidEmail) {
      isContactsValidValues.contactsEmail = false;
    }
  }

  if (e.target.id === 'contacts-message') {
    const isValidEmail = e.target.value.length;

    if (isValidEmail) {
      contactsMessage.parentElement.classList.add('success');
    }
    if (!isValidEmail) {
      contactsMessage.parentElement.classList.remove('success');
    }
  }

  if (isContactsValidValues.contactsName === true && isContactsValidValues.contactsEmail === true) {
    enableBtnSubmit(contactsBtn);
  } else {
    disableBtnSubmit(contactsBtn);
  }
});

contactsForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    name: contactsName.value,
    email: contactsEmail.value,
    message: contactsMessage.value,
  });
  handlePopUp(`<p class="pop-up__content-subscribe">Successful subscribe!</p>`);
  isContactsValidValues.contactsName = false;
  isContactsValidValues.contactsEmail = false;
  resetForm(contactsBtn, contactsForm);
});


