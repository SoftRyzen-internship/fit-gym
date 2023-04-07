import { modalInputHandler, modalSubmitHandler, form, removeModalListeners } from './modalForm';

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal'),
  modalContent: document.querySelector('.modal-content'),
  openModal: document.querySelectorAll('[data-modal-open]'),
};

export function toggleModal() {
  document.documentElement.classList.toggle('scroll-hidden');
  if (window.innerWidth >= 1280) {
    document.documentElement.classList.toggle('padding-right');
    /*     document.querySelector('.header').classList.toggle('margin-left'); */
  }
  refs.backdrop.classList.toggle('is-hidden');
  refs.modal.classList.toggle('is-hidden');
  if (!refs.modal.classList.contains('is-hidden')) {
    form.addEventListener('input', modalInputHandler);
    form.addEventListener('submit', modalSubmitHandler);
  }
  if (refs.modal.classList.contains('is-hidden')) {
    removeModalListeners();
  }
}

function handleKey(e) {
  if (e.code === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    refs.modal.classList.add('is-hidden');
    document.documentElement.classList.remove('scroll-hidden');
    removeModalListeners();
  }

  return;
}

function handleClose(e) {
  if (e.target !== e.currentTarget) return;
  toggleModal();
  removeModalListeners();
}

document.addEventListener('keydown', handleKey);
refs.backdrop.addEventListener('mousedown', handleClose);
refs.closeModalBtn.addEventListener('click', () => toggleModal());
Array.from(refs.openModal).map(btn => btn.addEventListener('click', () => toggleModal()));
