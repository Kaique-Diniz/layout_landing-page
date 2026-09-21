document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__icons__burguer');
  const closeBtn = document.querySelector('#menu-close');
  const menuOverlay = document.querySelector('#menu-overlay');
  const menuLinks = document.querySelectorAll('.menu__link');

  // Abrir o menu
  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      menuOverlay.classList.add('menu--open');
    });
  }

  // Fechar no "X"
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menuOverlay.classList.remove('menu--open');
    });
  }

  // Fechar ao clicar em qualquer link da navegação
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuOverlay.classList.remove('menu--open');
    });
  });
});
