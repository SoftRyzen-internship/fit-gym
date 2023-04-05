export function handlePopUp(content) {
  const overlay = document.querySelector('.pop-up__overlay');
  const closeBtn = document.querySelector('.pop-up__icon');
  const contentBlock = document.querySelector('.pop-up__description');
  const popUp = document.querySelector('.pop-up');
  const scrollWidth = window.innerWidth - document.documentElement.clientWidth + 'px';

  function returnPadding() {
    setTimeout(() => {
      document.documentElement.style.overflow = '';
      document.documentElement.style.paddingRight = '';
    }, 300);
  }

  popUp.classList.remove('pop-up--is-hidden');
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.paddingRight = scrollWidth;
  contentBlock.innerHTML = content;

  overlay.addEventListener('click', e => {
    if (!e.target.classList.contains('pop-up__overlay')) return;
    popUp.classList.add('pop-up--is-hidden');

    returnPadding();
  });

  closeBtn.addEventListener('click', () => {
    popUp.classList.add('pop-up--is-hidden');

    returnPadding();
  });

  function closeByEsc(e) {
    if (e.code === 'Escape') {
      popUp.classList.add('pop-up--is-hidden');

      returnPadding();
    }
  }
  window.addEventListener('keydown', closeByEsc);
}

function handleIconsClick() {
  const iconsList = document.querySelector('.footer__social-list');

  iconsList.addEventListener('click', e => {
    if (e.target.closest('.footer__social-link')) {
      handlePopUp(`<p class="pop-up__content">Sorry</p>
    <p class="pop-up__content">This page is in progress</p>`);
    }
  });
}

handleIconsClick();
