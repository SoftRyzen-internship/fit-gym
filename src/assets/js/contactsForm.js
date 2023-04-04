const contactsForm = document.getElementById('contacts-form');
const contactsBtn = document.querySelector('.contacts__send');

const contactsName = document.getElementById('contacts-name');
const contactsEmail = document.getElementById('contacts-email');
const contactsMessage = document.getElementById('contacts-message');

const isContactsValidValues = {
  contactsName: false,
  contactsEmail: false,
};

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
    const isValidEmail = checkInputEmail(e.target.value);

    if (isValidEmail) {
      isContactsValidValues.contactsEmail = true;
    }
    if (!isValidEmail) {
      isContactsValidValues.contactsEmail = false;
    }
  }

  if (isContactsValidValues.contactsName === true && isContactsValidValues.contactsEmail === true) {
    contactsBtn.removeAttribute('disabled');
    contactsBtn.classList.remove('button--disabled');
  } else {
    contactsBtn.setAttribute('disabled', 'disabled');
    contactsBtn.classList.add('button--disabled');
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
const checkInputEmail = email => {
  let isValidEmail = false;
  // Get values from the inputs
  const emailValue = email.trim();

  // VALIDATION PHONE
  if (!emailValue) {
    //Show error
    //Add error class
    setErrorFor(contactsEmail, 'Error(field is required)');
  } else if (!emailValue.match(emailRe)) {
    //Show error
    //Add error class
    setErrorFor(contactsEmail, 'Error(not valid email)');
  } else {
    //Add succes class
    setSuccessFor(contactsEmail);
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
