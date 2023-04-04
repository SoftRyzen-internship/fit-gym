const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal'),
  modalContent: document.querySelector('.modal-content'),
  openModal: document.querySelectorAll('[data-modal-open]'),
};

console.log(refs.openModal);

export function toggleModal() {
  document.body.classList.toggle('scroll-hidden');
  refs.backdrop.classList.toggle('is-hidden');
  refs.modal.classList.toggle('is-hidden');
}

function handleKey(e) {
  if (e.code === 'Escape') {
    toggleModal();
  }

  return;
}

function handleClose(e) {
  if (e.target !== e.currentTarget) return;
  toggleModal();
}

document.addEventListener('keydown', handleKey);
refs.backdrop.addEventListener('mousedown', handleClose);
refs.closeModalBtn.addEventListener('click', () => toggleModal());
Array.from(refs.openModal).map(btn => btn.addEventListener('click', () => toggleModal()));
