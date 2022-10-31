export const toggleVisibleModal = () => {
  const listBtnNodeModal = {
    btnOpenModalFeedBack: 'btn--chat',
    btnOpenModalOrderCall: 'btn--phone',
    btnCloseModal: 'modal__btn-close'
  }
  
  const isVisibleModal = (btnNode) => {
    const objectsModal = {
      blur: 'blur-visible',
      body: 'body__modal-open',
    };

    const allBtnNode = document.querySelectorAll(`.${btnNode}`);
    const modals = document.querySelectorAll('.modal');
    const menu = document.querySelector('.menu');
    const blur = document.querySelector('.blur');
    if (allBtnNode !== null) {
      for (let key in objectsModal) {
        let elModal = document.querySelector(`.${key}`);
        if (elModal !== null) {
          allBtnNode.forEach(btnNode => {
            btnNode.addEventListener('click', () => {
              menu.classList.remove('menu-open');
              if (btnNode.classList.contains('btn--chat')) {
                modalVisible(`modal--feed-back`, true);
                elModal.classList.add(`${objectsModal[key]}`);
              } else if (btnNode.classList.contains('btn--phone')) {
                modalVisible(`modal--order-call`, true);
                elModal.classList.add(`${objectsModal[key]}`);
              }
              if (blur.classList.contains('blur-visible')) {
                blur.addEventListener('click', () => {
                  blur.classList.remove('blur-visible');
                  modals.forEach(modal => {
                    if (modal.classList.contains('modal--feed-back')) {
                      modalVisible('modal--feed-back', false);
                    } else if (modal.classList.contains('modal--order-call')) {
                      modalVisible('modal--order-call', false);
                    }
                  })
                })
              }
              if (btnNode.classList.contains('modal__btn-close')) {
                modals.forEach(modal => {
                  if (modal.classList.contains('modal--feed-back')) {
                    modalVisible('modal--feed-back', false);
                  } else if (modal.classList.contains('modal--order-call')) {
                    modalVisible('modal--order-call', false);
                  }
                })
                elModal.classList.remove(`${objectsModal[key]}`);
              } 
            })
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                modals.forEach(modal => {
                  if (modal.classList.contains('modal--feed-back')) {
                    modalVisible('modal--feed-back', false);
                  } else if (modal.classList.contains('modal--order-call')) {
                    modalVisible('modal--order-call', false);
                  }
                })
                elModal.classList.remove(`${objectsModal[key]}`);
              }
            })
          })
        }
      }
    }
  }

  const modalVisible = (className, mode) => {
    const modals = document.querySelectorAll('.modal');
    if(modals !== null) {
      modals.forEach(modal => {
        if(modal.classList.contains(className)) {
          modal.open = mode;
          const inputs = modal.querySelectorAll('.form__input');
          inputs[0].focus();
        }
      })
    }
  }

  for(let key in listBtnNodeModal) {
    isVisibleModal(listBtnNodeModal[key]);
  }
}

