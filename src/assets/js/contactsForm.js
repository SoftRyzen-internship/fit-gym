import { handlePopUp } from "./popUp";

const contactsForm = document.getElementById('contacts-form');
const contactsBtn = document.querySelector('.contacts__send');

const contactsName = document.getElementById('contacts-name');
const contactsEmail = document.getElementById('contacts-email');
const contactsMessage = document.getElementById('contacts-message');

const subscribeForm = document.getElementById('subscribe-form');
const subscribeBtn = document.querySelector('.subscribe__button');

const subscribeEmail = document.getElementById('subscribe-email');

const isContactsValidValues = {
  contactsName: false,
  contactsEmail: false,
};

const isSubscribeValidValues = {
  subscribeEmail: false,
}

subscribeEmail.addEventListener('input', e => {
  const isValidName = checkInputEmail(e.target.value, subscribeEmail);

  if (isValidName) {
    isSubscribeValidValues.subscribeEmail = true;
    subscribeBtn.removeAttribute('disabled');
    subscribeBtn.classList.remove('subscribe__disabled');
  } else {
    isSubscribeValidValues.subscribeEmail = false;
    subscribeBtn.setAttribute('disabled', 'disabled');
    subscribeBtn.classList.add('subscribe__disabled');
  }
});

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!isSubscribeValidValues.subscribeEmail) {return};
  handlePopUp(`<p class="pop-up__content-subscribe">Successful subscribe!</p>`);
  console.log({ email: subscribeEmail.value });
  e.currentTarget.reset();
  isSubscribeValidValues.subscribeEmail = false;
  e.currentTarget.classList.remove('success');
  subscribeBtn.setAttribute('disabled', 'disabled');
  subscribeBtn.classList.add('subscribe__disabled');
});

contactsForm.addEventListener('input', e => {
  if (e.target.id === 'contacts-name') {
    const isValidName = checkInputName(e.target.value);

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
    console.log("remove classlist")
    contactsBtn.removeAttribute('disabled');
    contactsBtn.classList.remove('button--disabled');
    contactsBtn.classList.add('button--primary');
  } else {
    contactsBtn.setAttribute('disabled', 'disabled');
    contactsBtn.classList.add('button--disabled');
    contactsBtn.classList.remove('button--primary');
  }
});

contactsForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    name: contactsName.value,
    email: contactsEmail.value,
    message: contactsMessage.value,
  });
  e.currentTarget.reset();
  isContactsValidValues.contactsName = false;
  isContactsValidValues.contactsEmail = false;
  contactsBtn.setAttribute('disabled', 'disabled');
  contactsBtn.classList.add('button--disabled');
  contactsBtn.classList.remove('button--primary');
  const array = contactsForm.querySelectorAll('.success');
  Array.from(array).map(item => item.classList.remove('success'));
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
    setErrorFor(contactsName, 'Error(field is required)');
  } else if (usernameValue.length < 2) {
    setErrorFor(contactsName, 'Error(from 2 to 30 letters)');
  } else if (usernameValue.length > 30) {
    setErrorFor(contactsName, 'Error(from 2 to 30 letters)');
  } else if (!usernameValue.match(nameRe)) {
    //Show error
    //Add error class
    setErrorFor(contactsName, 'Error(only latin letters)');
  } else {
    //Add succes class
    setSuccessFor(contactsName);
    isValidName = true;
  }

  return isValidName;
};

// CHECK INPUT EMAIL
const emailRe = /^([a-zA-Z0-9])+([a-zA-Z0-9._-]+)@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)\.[a-zA-Z]{2,}$/;
const checkInputEmail = (email, inputEmail) => {
  let isValidEmail = false;
  // Get values from the inputs
  const emailValue = email.trim();

  // VALIDATION PHONE
  if (!emailValue) {
    //Show error
    //Add error class
    setErrorFor(inputEmail, 'Error(field is required)');
  } else if (!emailValue.match(emailRe)) {
    //Show error
    //Add error class
    setErrorFor(inputEmail, 'Error(not valid email)');
  } else {
    //Add succes class
    setSuccessFor(inputEmail);
    isValidEmail = true;
  }

  return isValidEmail;
};

// SET CLASSNAME FOR ERROR
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.contacts__error');

  //add error message inside small
  errorText.innerText = message;

  //add error class
  formControl.classList.add('error');
  formControl.classList.remove('success');
};

// SET CLASSNAME FOR SUCCESS
const setSuccessFor = input => {
  const formControl = input.parentElement;

  //add success class
  formControl.classList.add('success');
  formControl.classList.remove('error');
};
