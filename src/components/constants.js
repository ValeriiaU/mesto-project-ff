const profileButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupList = document.querySelectorAll('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputDescription = popupProfile.querySelector('.popup__input_type_description');

export {profileButton, profileAddButton, popupProfile, popupNewCard, 
    popupList, profileTitle, profileDescription, inputName, inputDescription};