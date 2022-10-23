const btn = document.querySelectorAll('.btn-show-all');
const brandsGallery = document.querySelector('.brands__gallery');
const repairOfEquipmentGallery = document.querySelector('.repairOfEquipment__list');

btn[0].addEventListener('click', (e) => {
    btn[0].classList.toggle('btn-show-all--close');
    brandsGallery.classList.toggle('brands__gallery--open');
    brandsGallery.classList.toggle('brands__gallery');
    if(btn[0].innerHTML === 'Показать все') {
        btn[0].innerHTML = 'Скрыть';
    } else {
        btn[0].innerHTML = 'Показать все';
    }
});

btn[1].addEventListener('click', (e) => {
    btn[1].classList.toggle('btn-show-all--close');
    repairOfEquipmentGallery.classList.toggle('repairOfEquipment__list--open');
    if(btn[1].innerHTML === 'Показать все') {
        btn[1].innerHTML = 'Скрыть';
    } else {
        btn[1].innerHTML = 'Показать все';
    }
})
