const burgerBtn = document.querySelector('[data-burger-menu]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const closeBtn = document.querySelector('[data-close]');
const backdrop = document.querySelector('[data-menu-backdrop]');

burgerBtn.addEventListener('click', e => {
  openMenu();
});

backdrop.addEventListener('click', e => {
  const { tagName } = e.target;

  if (tagName !== 'DIV' && tagName !== 'UL' && tagName !== 'NAV') {
    closeMenu();
  }

  if (e.target === e.currentTarget) {
    closeMenu();
  }
});

const closeMenu = () => {
  mobileMenu.style.transform = 'translateX(100%)';
  burgerBtn.style.opacity = 1;
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('scroll-hidden');
};

const openMenu = () => {
  mobileMenu.style.transform = 'translateX(0)';
  burgerBtn.style.opacity = 0;
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('scroll-hidden');
};
