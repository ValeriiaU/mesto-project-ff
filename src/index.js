import './pages/index.css'; // добавьте импорт главного файла стилей 

import {initialCards} from './components/cards.js';

import {openModal, closeModal} from './components/modal.js';

import {createCard, deleteCard, likeCard, placesList} from './components/card.js';

import {profileButton, profileAddButton, popupProfile, 
  popupNewCard, popupList, profileTitle, profileDescription, 
  inputName, inputDescription} from './components/constants.js';


// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const newListItem = createCard(item, deleteCard, likeCard, addImagePopup);
  placesList.append(newListItem);
}); 


function addImagePopup (item, attributeSrc, atributeAlt) {
  const popapContentImage = item.querySelector('.popup__image');
  popapContentImage.src = attributeSrc;
  popapContentImage.alt = atributeAlt;
  const paragraphAlt = item.querySelector('.popup__caption');
  paragraphAlt.textContent = atributeAlt;
  openModal(item);
};


profileButton.addEventListener('click', function() {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;

  openModal(popupProfile);
});


// Находим форму в DOM
const formProfileElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formProfileElement.querySelector('.popup__input_type_name');
const jobInput = formProfileElement.querySelector('.popup__input_type_description');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormProfileSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(popupProfile); 
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfileElement.addEventListener('submit', handleFormProfileSubmit);

profileAddButton.addEventListener('click', () => openModal(popupNewCard));


popupList.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal(popup));
});


const formElementAddCard = document.forms['new-place'];
const plaseName = formElementAddCard.elements['place-name'];
const linkNewCard = formElementAddCard.elements['link'];

function handleFormAddCardSubmit(evt) {
  evt.preventDefault(); 
  const objectInput = {name: plaseName.value,
                       link: linkNewCard.value};
  const newCardInput = createCard(objectInput, deleteCard, likeCard, addImagePopup);
  placesList.prepend(newCardInput);
  formElementAddCard.reset();
  closeModal(popupNewCard);
};
formElementAddCard.addEventListener('submit', handleFormAddCardSubmit);

