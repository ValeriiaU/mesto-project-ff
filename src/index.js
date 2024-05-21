import './pages/index.css'; // добавьте импорт главного файла стилей 

import {openModal, closeModal} from './components/modal.js';

import {createCard, deleteCard, likeCard, placesList} from './components/card.js';

import {profileButton, profileAddButton, popupProfile, 
  popupNewCard, popupList, profileTitle, profileDescription, 
  inputName, inputDescription, avatarButton, popupAvatar, 
  popupAvatarInput} from './components/constants.js';

import { enableValidation, clearValidation } from './components/validation.js';

import { getAllPromises, editingProfile, addNewCardPost, deleteCardApi, addLikeApi, unlikeCardApi, addAvatarApi} from './components/api.js';


function initialCards() {
  getAllPromises()
  .then((data) => {
    const usersInformation = data[0];
    const cardsInformation = data[1];
    cardsInformation.forEach(element => {
        const newListCards = createCard(element, deleteCard, likeCard, addImagePopup, usersInformation, deleteCardApi, addLikeApi, unlikeCardApi);
        placesList.append(newListCards);
    });
  })
}
initialCards();

export function addImagePopup (item, attributeSrc, atributeAlt) {
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
  clearValidation(document.forms['edit-profile']);
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
    editingProfile(nameInput.value, jobInput.value)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
      .then(data => {
        profileTitle.textContent = data.name;
        profileDescription.textContent = data.about;
        document.querySelector('.button').textContent = 'Сохранить';
        closeModal(popupProfile); 
      })
      .catch(err => {
        console.log(err);
        document.querySelector('.button').textContent = 'Сохранить';
      })
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfileElement.addEventListener('submit', function(evt) {
  evt.preventDefault(); 
  formProfileElement.querySelector('button').textContent = 'Сохранение...';
  handleFormProfileSubmit();
});

profileAddButton.addEventListener('click', function() {
  clearValidation(document.forms['new-place']);
  openModal(popupNewCard);
});


popupList.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal(popup));
});


const formElementAddCard = document.forms['new-place'];
const plaseName = formElementAddCard.elements['place-name'];
const linkNewCard = formElementAddCard.elements['link'];

function handleFormAddCardSubmit() {   
  addNewCardPost(plaseName.value, linkNewCard.value)
  .then(res => {
    return res.json();
  })
  .then(data => {
    formElementAddCard.querySelector('.button').textContent = 'Сохранить';
    const newCardInput = createCard(data, deleteCard, likeCard, addImagePopup, data.owner._id, deleteCardApi, addLikeApi, unlikeCardApi);
    placesList.prepend(newCardInput);
    formElementAddCard.reset();
    closeModal(popupNewCard);
  })
  .catch((err) => {
    console.log(err); 
  }); 
};

formElementAddCard.addEventListener('submit', function(evt) {
  evt.preventDefault(); 
  formElementAddCard.querySelector('.button').textContent = 'Сохранение...';
  handleFormAddCardSubmit();
});

// Вызовем функцию
enableValidation(); 


avatarButton.addEventListener('click', function() {
  clearValidation(document.forms['new-avatar']);
  document.forms['new-avatar'].reset();
  openModal(popupAvatar);
});


popupAvatar.addEventListener('submit', function(evt) {
  evt.preventDefault(); 
  popupAvatar.querySelector('.button').textContent = 'Сохранение...';
  addAvatarApi(popupAvatarInput.value)
    .then (res => {
      if(res.ok) {
        return res.json()
      }
    })
   .then(data => {
    document.querySelector('.profile__image').style.backgroundImage = `url(${data.avatar})`;
    popupAvatar.querySelector('.button').textContent = 'Сохранить';
    closeModal(popupAvatar);
   })
   .catch((err) => {
    console.log(err); 
  }); 
})