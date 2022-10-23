const body = document.querySelector('body');
const btnOpenMenu = document.querySelector('.header__btn-menu');
const btnCloseMenu = document.querySelector('.menu__header-btn--close-menu');
const menu = document.querySelector('.menu');
const blur = document.querySelector('.blur');


//Открытие меню на кнопку
btnOpenMenu.addEventListener('click', () => {
  menu.classList.add('menu-open');
  blur.classList.add('blur-visible');
  body.classList.add('body__modal-open');
});

//Закрытие меню на кнопку
btnCloseMenu.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  blur.classList.remove('blur-visible');
  body.classList.remove('body__modal-open');
})

//Закрытие меню на заблюренную область
blur.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  blur.classList.remove('blur-visible');
  body.classList.remove('body__modal-open');
})

