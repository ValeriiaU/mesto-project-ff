const popupImege= document.querySelector('.popup_type_image');
// @todo: Темплейт карточки
export const template = document.querySelector('#card-template').content;
// @todo: DOM узлы
export const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
export function createCard(cardInfo, removeCard, cardLike, popupImageOpen) {
  const newCard = template.querySelector('.places__item').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name;
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = cardInfo.name;


  newCard.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('card__delete-button')) {
      removeCard(newCard);
    };
  });
  

  const likeButton = newCard.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => cardLike(likeButton));


  newCard.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('card__image')) {
        popupImageOpen(popupImege, cardImage.src, cardImage.alt);
    };
  });
  
  return newCard;
};


// @todo: Функция удаления карточки
export function deleteCard (cardElemeent) {
  cardElemeent.remove();
};


export function likeCard (cardSimbol) {
  cardSimbol.classList.toggle('card__like-button_is-active');
};

