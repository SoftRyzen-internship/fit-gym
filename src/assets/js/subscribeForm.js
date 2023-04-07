import { handlePopUp } from "./popUp";
import { checkInputEmail } from "./validation";

const subscribeForm = document.getElementById('subscribe-form');
const subscribeBtn = document.querySelector('.subscribe__button');

const subscribeEmail = document.getElementById('subscribe-email');

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