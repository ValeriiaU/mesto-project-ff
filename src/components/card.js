import { checkingServersResponse } from '../index';

const popupImege= document.querySelector('.popup_type_image');
// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function createCard(cardInfo, removeCard, cardLike, popupImageOpen, myId, removeApi, likeCount, cardunlike) {
  const newCard = template.querySelector('.places__item').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name;
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = cardInfo.name;
  const cardLikesArr = cardInfo.likes;
  const cardOwnerId = cardInfo.owner._id;


  if(cardLikesArr.length > 0) {
    newCard.querySelector('.count').classList.add('card__like-button-count');
    newCard.querySelector('.count').textContent = cardLikesArr.length;
  } else if(cardLikesArr.length === 0) {
    newCard.querySelector('.count').classList.remove('card__like-button-count');
  };

  
  const likeButton = newCard.querySelector('.card__like-button');
  if (cardLikesArr.find(item => item._id === myId)) {
    cardLike(likeButton);
  }


  likeButton.addEventListener('click', function() {
    if (!likeButton.classList.contains('card__like-button_is-active')) {
      likeCount(cardInfo._id)
      .then(data => {
        if(data.likes.length === 1) {
          newCard.querySelector('.count').classList.add('card__like-button-count')
          newCard.querySelector('.count').textContent = data.likes.length;
          cardLike(likeButton)
        } else {
          newCard.querySelector('.count').textContent = data.likes.length;
          cardLike(likeButton)
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
    } else {
      cardunlike(cardInfo._id)
      .then(data => {
        if(data.likes.length === 0) {
          newCard.querySelector('.count').classList.remove('card__like-button-count')
          newCard.querySelector('.count').textContent = '';
          cardLike(likeButton)
        } else {
          newCard.querySelector('.count').textContent = data.likes.length;
          cardLike(likeButton)
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
    }
  })


  if(cardOwnerId !== myId) {
    newCard.querySelector('.card__delete-button').classList.add('card__delete-button-hidden');
  } else {
    newCard.addEventListener('click', function(evt) {
      if(evt.target.classList.contains('card__delete-button')) {
        removeApi(cardInfo._id)
        .then(data => {
            removeCard(newCard);
        })
        .catch((err) => {
          console.log(err);
        })
      };
    });
  }


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


