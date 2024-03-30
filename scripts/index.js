// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(cardInfo, removeCard) {
  const newCard = template.querySelector('.places__item').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name;
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = cardInfo.name;

  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', () => removeCard(newCard));
  return newCard;
}
// @todo: Функция удаления карточки
function deleteCard (cardElemeent) {
  cardElemeent.remove();
};
// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const newListItem = createCard(item, deleteCard);
  placesList.append(newListItem);
}); 