const btn = document.querySelector('.brands__btn-show-all');
const block = document.querySelector('.brands__gallery');
let textBtn = btn.innerHTML;

btn.addEventListener('click', function(evt) {
  evt.preventDefault();
  if(!block.classList.contains('brands__gallery--open')) {
    block.classList.add('brands__gallery--open');
    block.classList.remove('brands__gallery');
    btn.classList.add('btn-show-all--close');
    btn.innerHTML = 'Скрыть'
  } else {
    block.classList.remove('brands__gallery--open');
    block.classList.add('brands__gallery');
    btn.classList.remove('btn-show-all--close');
    btn.innerHTML = textBtn;
  }
})