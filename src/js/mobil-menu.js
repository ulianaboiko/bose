'use strict';
const menu = document.querySelector('[data-menu]');
const menuButton = document.querySelector('[data-menu-button]');

const toggleMenu = () => {
  menu.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
};

menuButton.addEventListener('click', toggleMenu);
menu.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    toggleMenu();
  }
});
