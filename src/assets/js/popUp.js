function handleClick({ triggerParent, trigger, content }) {
    const overlay = document.querySelector('.pop-up__overlay');
    const closeBtn = document.querySelector('.pop-up__icon');
    const contentBlock = document.querySelector('.pop-up__description');
    const popUp = document.querySelector('.pop-up');
    
  triggerParent.addEventListener('click', e => {
    if (e.target.closest(trigger)) {
      popUp.classList.remove('pop-up--is-hidden');
      document.body.style.overflow = 'hidden';
      contentBlock.innerHTML = content;
    }
  });

  overlay.addEventListener('click', e => {
    if (!e.target.classList.contains('pop-up__overlay')) return;
    popUp.classList.add('pop-up--is-hidden');
    document.body.style.overflow = '';
  });

  closeBtn.addEventListener('click', () => {
    popUp.classList.add('pop-up--is-hidden');
    document.body.style.overflow = '';
  });

  function closeByEsc(e) {
    if (e.code === 'Escape') {
      popUp.classList.add('pop-up--is-hidden');
      document.body.style.overflow = '';
    }
  }
  window.addEventListener('keydown', closeByEsc);
}

handleClick({
  triggerParent: document.querySelector('.footer__social-list'),
  trigger: '.footer__social-link',
  content: `<p class="pop-up__content">Sorry</p>
    <p class="pop-up__content">This page is in progress</p>`,
});

handleClick({
    triggerParent: document.querySelector('.subscribe__form'),
    trigger: '.subscribe__button',
    content: `<p class="pop-up__content-subscribe">Successful subscribe!</p>`
  });
