import { handlePopUp } from './popUp';

import { toggleModal } from './modal';

const form = document.getElementById('form');
const sendBtn = document.querySelector('.modal__send-btn');

const username = document.getElementById('name');
const phone = document.getElementById('telephone');
const email = document.getElementById('email');

// SET DISABLED BUTTON
sendBtn.classList.remove('button--primary');
sendBtn.classList.add('button--disabled');

const isValidValues = {
  name: false,
  phone: false,
  email: false,
};

form.addEventListener('input', e => {
  if (e.target.id === 'name') {
    const isValidName = checkInputName(e.target.value);

    if (isValidName) {
      isValidValues.name = true;
    }
    if (!isValidName) {
      isValidValues.name = false;

      sendBtn.classList.remove('button--primary');
      sendBtn.classList.add('button--disabled');
    }
  }

  if (e.target.id === 'telephone') {
    const isValidPhone = checkInputPhone(e.target.value);

    if (isValidPhone) {
      isValidValues.phone = true;
    }
    if (!isValidPhone) {
      isValidValues.phone = false;

      sendBtn.classList.remove('button--primary');
      sendBtn.classList.add('button--disabled');
    }
  }

  if (e.target.id === 'email') {
    const isValidEmail = checkInputEmail(e.target.value);

    if (isValidEmail) {
      isValidValues.email = true;
    }
    if (!isValidEmail) {
      isValidValues.email = false;

      sendBtn.classList.remove('button--primary');
      sendBtn.classList.add('button--disabled');
    }
  }

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true && isValidValues.email === true) {
    sendBtn.classList.add('button--primary');
    sendBtn.classList.remove('button--disabled');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (isValidValues.name === true && isValidValues.phone === true && isValidValues.email === true) {
    e.currentTarget.reset();

    toggleModal();

    setTimeout(() => {
      handlePopUp(`
      <p class="pop-up__content-subscribe">Sent</p>
      <p class="pop-up__content-subscribe">We will contact you soon!</p>
      `);
    },500)
    

    isValidValues.name = false;
    isValidValues.phone = false;
    isValidValues.email = false;
  }
});

// CHECK INPUT NAME
const checkInputName = name => {
  let isValidName = false;

  // Get values from the inputs
  const usernameValue = name.trim();

  // VALIDATION NAME
  const nameRe = /^[a-zA-Z-]+$/;
  if (!usernameValue) {
    console.log('error');
    //Show error
    //Add error class
    setErrorFor(username, 'Error(field is required)');
  } else if (usernameValue.length < 2) {
    setErrorFor(username, 'Error(from 2 to 30 letters)');
  } else if (usernameValue.length > 30) {
    setErrorFor(username, 'Error(from 2 to 30 letters)');
  } else if (!usernameValue.match(nameRe)) {
    //Show error
    //Add error class
    setErrorFor(username, 'Error(only latin letters)');
  } else {
    //Add succes class
    setSuccessFor(username);
    isValidName = true;
  }

  return isValidName;
};

// CHECK INPUT PHONE
const checkInputPhone = phoneInput => {
  let isValidPhone = false;
  // Get values from the inputs
  const phoneValue = phoneInput.trim();

  // VALIDATION PHONE
  const re = /^[0-9+-]+$/;
  if (!phoneValue) {
    //Show error
    //Add error class
    setErrorFor(phone, 'Error(field is required)');
  } else if (!phoneValue.startsWith('+44')) {
    setErrorFor(phone, 'Error(start with +44)');
  } else if (phoneValue.length < 13 || phoneValue.length >= 14) {
    setErrorFor(phone, 'Error(only 12 numbers)');
  } else if (!phoneValue.match(re)) {
    //Add error class
    setErrorFor(phone, 'Error(only numbers)');
  } else {
    //Add succes class
    setSuccessFor(phone);
    isValidPhone = true;
  }

  return isValidPhone;
};

// CHECK INPUT EMAIL
const checkInputEmail = emailInput => {
  let isValidEmail = false;
  // Get values from the inputs
  const emailValue = emailInput.trim();
  // VALIDATION EMAIL
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailValue) {
    //Show error
    //Add error class
    setErrorFor(email, 'Error(field is required)');
  } else if (!emailValue.match(reg)) {
    //Add error class
    setErrorFor(email, 'Error(invalid email)');
  } else {
    //Add succes class
    setSuccessFor(email);
    isValidEmail = true;
  }

  return isValidEmail;
};

// SET CLASSNAME FOR ERROR
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('span');

  //add error message inside small
  errorText.innerText = message;

  //add error class
  formControl.className = 'modal__form-control error';
};

// SET CLASSNAME FOR SUCCESS
const setSuccessFor = input => {
  const formControl = input.parentElement;

  //add success class
  formControl.className = 'modal__form-control success';
};
