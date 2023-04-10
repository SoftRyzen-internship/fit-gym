// CHECK INPUT NAME
export const checkInputName = (name, inputName) => {
  let isValidName = false;

  // Get values from the inputs
  const usernameValue = name.trim();

  // VALIDATION NAME
  const nameRegex = /^[a-zA-Z-]+$/;
  if (!usernameValue) {
    //Add error class
    setErrorFor(inputName, 'Error(field is required)');
  } else if (usernameValue.length < 2 || usernameValue.length > 30) {
    setErrorFor(inputName, 'Error(from 2 to 30 letters)');
  } else if (!usernameValue.match(nameRegex)) {
    setErrorFor(inputName, 'Error(only latin letters)');
  } else {
    //Add succes class
    setSuccessFor(inputName);
    isValidName = true;
  }

  return isValidName;
};

// CHECK INPUT PHONE
export const checkInputPhone = (phone, inputPhone) => {
  let isValidPhone = false;
  // Get values from the inputs
  const phoneValue = phone.trim();

  // VALIDATION PHONE
  const phoneRegex = /^[0-9+-]+$/;
  if (!phoneValue) {
    //Add error class
    setErrorFor(inputPhone, 'Error(field is required)');
  } else if (!phoneValue.startsWith('+44')) {
    setErrorFor(inputPhone, 'Error(start with +44)');
  } else if (phoneValue.length < 13 || phoneValue.length >= 14) {
    setErrorFor(inputPhone, 'Error(only 12 numbers)');
  } else if (!phoneValue.match(phoneRegex)) {
    //Add error class
    setErrorFor(inputPhone, 'Error(only numbers)');
  } else {
    //Add succes class
    setSuccessFor(inputPhone);
    isValidPhone = true;
  }

  return isValidPhone;
};

// CHECK INPUT EMAIL
export const checkInputEmail = (email, inputEmail) => {
  let isValidEmail = false;
  // Get values from the inputs
  const emailValue = email.trim();

  // VALIDATION EMAIL
  const emailRegex =
    /^([a-zA-Z0-9])+([a-zA-Z0-9._-]+)@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)\.[a-zA-Z]{2,}$/;
  if (!emailValue) {
    //Add error class
    setErrorFor(inputEmail, 'Error(field is required)');
  } else if (emailValue.length >= 63) {
    setErrorFor(inputEmail, 'Error(only 63 symbols)');
  } else if (!emailValue.match(emailRegex)) {
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
  const errorText = formControl.querySelector('span');

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
