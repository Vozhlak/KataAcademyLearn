const btnOpenModalFeedBack = document.querySelectorAll('.btn--chat');
const btnOpenModalOrderCall = document.querySelectorAll('.btn--phone');
const btnCloseModal = document.querySelector('.modal__btn-close');
const blur = document.querySelector('.blur');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const menu = document.querySelector('.menu');

let titleModal = modal.querySelector('.modal__title');
let inputName = modal.querySelector('.input-name');
let inputEmail = modal.querySelector('.input-email');
let inputTextArea = modal.querySelector('.input-textarea');

btnOpenModalFeedBack.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    blur.classList.add('blur-visible');
    modal.open = true;
    body.classList.add('body__modal-open');
    titleModal.innerHTML = 'Обратная связь';
    inputName.style = 'display: visible';
    inputEmail.style = 'display: visible';
    inputTextArea.style = 'display: visible';
    if(menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
    }
  })
});

btnOpenModalOrderCall.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    blur.classList.add('blur-visible');
    modal.open = true;
    body.classList.add('body__modal-open');
    titleModal.innerHTML = 'Заказать звонок';
    inputName.style = 'display: none';
    inputEmail.style = 'display: none';
    inputTextArea.style = 'display: none';

    if(menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
    }
  })
});

btnCloseModal.addEventListener('click', () => {
  blur.classList.remove('blur-visible');
  modal.open = false;
  body.classList.remove('body__modal-open');
});

blur.addEventListener('click', () => {
  blur.classList.remove('blur-visible');
  modal.open = false;
  body.classList.remove('body__modal-open');
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    modal.open = false;
    blur.classList.remove('blur-visible');
    body.classList.remove('body__modal-open');
  }
})

