export function openModal(popupOpen) {
    popupOpen.classList.add('popup_is-opened');
};
  
export function closeModal(popupClose) {
    popupClose.classList.remove('popup_is-opened');
};


function closeEscape() {
    document.addEventListener('keydown', function(evt) {
      if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
        document.removeEventListener('keydown', closeEscape);
      }
    });
};
  
closeEscape();
  
  
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