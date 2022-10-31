export const showAll = () => {
  const objShowAll = {
    "about-us__btn-show-all": "about-us__description-text",
    "brands__btn-show-all": "brands__gallery",
    "repair-of-equipment__btn-show-all": "repair-of-equipment__gallery",
  }

  const expandBlock = (toggle, block) => {
    let btnNode = document.querySelector(`.${toggle}`);
    if (btnNode !== null) {
      let textBtn = btnNode.innerHTML;
      btnNode.addEventListener('click', () => {
        btnNode.classList.toggle(`btn-show-all--close`)
        let el = document.querySelector(`.${block}`);
        el.classList.toggle(`${block}--open`);
        if (el.classList.contains(`${block}--open`)) {
          btnNode.innerHTML = 'Скрыть'
        } else {
          btnNode.innerHTML = textBtn;
        }
      })
    }
  }

  for(let key in objShowAll) {
    expandBlock(key, objShowAll[key]);
  }
}
