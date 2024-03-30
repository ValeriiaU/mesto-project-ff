// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(cardInfo, cardDelete) {
  const newCard = template.querySelector('.places__item').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = cardInfo.link;
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = cardInfo.name;

  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', cardDelete);

  return newCard;
}
// @todo: Функция удаления карточки
function deleteCard (evt) {
  const buttonParent = evt.target.parentElement;
  buttonParent.remove();
};
// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
  const newListItem = createCard(initialCards[i], deleteCard);
  placesList.append(newListItem);
};

/*
initialCards.forEach(function(item) {
  const newListItem = createCard(item, deleteCard);
  placesList.append(newListItem);
}); */