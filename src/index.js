import './pages/index.css'; // добавьте импорт главного файла стилей 

import {initialCards} from './components/cards.js';

import {openModal, closeModal} from './components/modal.js';

import {createCard, deleteCard, likeCards, placesList} from './components/card.js';


const profileButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupList = document.querySelectorAll('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputDescription = popupProfile.querySelector('.popup__input_type_description');


// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const newListItem = createCard(item, deleteCard, likeCards, addImagePopup);
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
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(popupProfile); 
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

profileAddButton.addEventListener('click', () => openModal(popupNewCard));


popupList.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal(popup));
});


const formElementAddCard = document.forms['new-place'];
const plaseName = formElementAddCard.elements['place-name'];
const linkNewCard = formElementAddCard.elements['link'];

function processingFormSubmit(evt) {
  evt.preventDefault(); 
  const objectInput = {name: plaseName.value,
                       link: linkNewCard.value};
  const newCardInput = createCard(objectInput, deleteCard, likeCards, addImagePopup);
  placesList.prepend(newCardInput);
  formElementAddCard.reset();
  closeModal(popupNewCard);
};
formElementAddCard.addEventListener('submit', processingFormSubmit);

