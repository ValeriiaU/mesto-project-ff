export function openModal(popupOpen) {
    popupOpen.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupByEsc);
};
  
export function closeModal(popupClose) {
    popupClose.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupByEsc);
};


function closePopupByEsc(evt) {
      if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_is-opened');
        closeModal(popupOpened);
      };
};
  
  
const popupsList = document.querySelectorAll('.popup');
  popupsList.forEach(function(item) {
    item.classList.add('popup_is-animated');
      item.addEventListener('click', function(evt) {
        const popupContent = item.querySelector('.popup__content');
        if(!popupContent.contains(evt.target)) {
          closeModal(item);
        };
      });
});