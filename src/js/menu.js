export const toggleVisibleMenu = () => {
  const listBtnNodeMenu = {
    btnOpenMenu: "header__btn-menu",
    btnCloseMenu: "menu__header-btn--close-menu",
    backBlur: 'blur'
  };
  
  const toggleMenu = (toggle) => {
    const objectsMenu = {
      menu: 'menu-open',
      blur: 'blur-visible',
      body: 'body__modal-open'
    };

    const btnNode = document.querySelector(`.${toggle}`);
    if(btnNode !== null) {
      for(let key in objectsMenu) {
        let el = document.querySelector(`.${key}`);
        btnNode.addEventListener('click', () => {
          if(!el.classList.contains(`${objectsMenu[key]}`)) {
            el.classList.add(`${objectsMenu[key]}`);
          } else {
            el.classList.remove(`${objectsMenu[key]}`);
          }
          
        });

        btnNode.addEventListener('keydown', (e) => {
          if(e.key === 'Escape') {
            if(el.classList.contains(`${objectsMenu[key]}`)) {
              el.classList.remove(`${objectsMenu[key]}`);
            }
          }
        });
      }
    }
    
    const blur = document.querySelector('.blur');
    const menu = document.querySelector('.menu');
    blur.addEventListener('click', () => {
      if (menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
      }
    })
  }


  for(let key in listBtnNodeMenu) {
    toggleMenu(listBtnNodeMenu[key]);
  }
};

