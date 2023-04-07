import { disableBtnSubmit, enableBtnSubmit, resetForm } from './contactsForm';
import { checkInputName, checkInputPhone, checkInputEmail } from './validation';
import { handlePopUp } from './popUp';
import { toggleModal } from './modal';

const form = document.getElementById('form');
const sendBtn = document.querySelector('.modal__send-btn');

const username = document.getElementById('name');
const phone = document.getElementById('telephone');
const email = document.getElementById('email');

export const removeModalListeners = () => {
  form.removeEventListener('submit', modalSubmitHandler);
  form.removeEventListener('input', modalInputHandler);
}

disableBtnSubmit(sendBtn);

const isValidValues = {
  name: false,
  phone: false,
  email: false,
};

function modalInputHandler(e) {
  if (e.target.id === 'name') {
    const isValidName = checkInputName(e.target.value, username);

    if (isValidName) {
      isValidValues.name = true;
    }
    if (!isValidName) {
      isValidValues.name = false;
    }
  }

  if (e.target.id === 'telephone') {
    const isValidPhone = checkInputPhone(e.target.value, phone);

    if (isValidPhone) {
      isValidValues.phone = true;
    }
    if (!isValidPhone) {
      isValidValues.phone = false;
    }
  }

  if (e.target.id === 'email') {
    const isValidEmail = checkInputEmail(e.target.value, email);

    if (isValidEmail) {
      isValidValues.email = true;
    }
    if (!isValidEmail) {
      isValidValues.email = false;
    }
  }

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true && isValidValues.email === true) {
    enableBtnSubmit(sendBtn);
  } else {
    disableBtnSubmit(sendBtn);
  }
}

function modalSubmitHandler(e) {
  e.preventDefault();

  if (isValidValues.name === true && isValidValues.phone === true && isValidValues.email === true) {
    toggleModal();

    setTimeout(() => {
      handlePopUp(`
      <p class="pop-up__content-subscribe">Sent</p>
      <p class="pop-up__content-subscribe">We will contact you soon!</p>
      `);
    }, 500);

    isValidValues.name = false;
    isValidValues.phone = false;
    isValidValues.email = false;

    resetForm(sendBtn, form);

    removeModalListeners();
  }
}

export {modalInputHandler, modalSubmitHandler, form};
