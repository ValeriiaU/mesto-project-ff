/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAvatarApi: () => (/* binding */ addAvatarApi),\n/* harmony export */   addLikeApi: () => (/* binding */ addLikeApi),\n/* harmony export */   addNewCardPost: () => (/* binding */ addNewCardPost),\n/* harmony export */   deleteCardApi: () => (/* binding */ deleteCardApi),\n/* harmony export */   editingProfile: () => (/* binding */ editingProfile),\n/* harmony export */   getAllPromises: () => (/* binding */ getAllPromises),\n/* harmony export */   getCardsInformation: () => (/* binding */ getCardsInformation),\n/* harmony export */   getUsersInformation: () => (/* binding */ getUsersInformation),\n/* harmony export */   unlikeCardApi: () => (/* binding */ unlikeCardApi)\n/* harmony export */ });\nfunction getUsersInformation() {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me', {\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'\n    }\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n  }).then(function (res) {\n    document.querySelector('.profile__title').textContent = res.name;\n    document.querySelector('.profile__description').textContent = res.about;\n    document.querySelector('.profile__image').style.backgroundImage = \"url(\".concat(res.avatar, \")\");\n    return res._id;\n  });\n}\n;\nfunction getCardsInformation() {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-13/cards', {\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'\n    }\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n  });\n}\n;\nvar promises = [getUsersInformation(), getCardsInformation()];\nfunction getAllPromises() {\n  return Promise.all(promises);\n}\n;\nfunction editingProfile(nameInput, aboutInput) {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me', {\n    method: 'PATCH',\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: nameInput,\n      about: aboutInput\n    })\n  });\n}\n;\nfunction addNewCardPost(nameInput, linkInput) {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-13/cards', {\n    method: 'POST',\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: nameInput,\n      link: linkInput\n    })\n  });\n}\n;\nfunction deleteCardApi(cardId) {\n  return fetch(\"https://nomoreparties.co/v1/wff-cohort-13/cards/\".concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      _id: cardId\n    })\n  });\n}\n;\nfunction addLikeApi(cardId) {\n  return fetch(\"https://nomoreparties.co/v1/wff-cohort-13/cards/likes/\".concat(cardId), {\n    method: 'PUT',\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'\n    }\n  });\n}\n;\nfunction unlikeCardApi(cardId) {\n  return fetch(\"https://nomoreparties.co/v1/wff-cohort-13/cards/likes/\".concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'\n    }\n  });\n}\n;\nfunction addAvatarApi(url) {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me/avatar', {\n    method: 'PATCH',\n    headers: {\n      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      avatar: url\n    })\n  });\n}\n;\n\n//# sourceURL=webpack://mesto/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   placesList: () => (/* binding */ placesList),\n/* harmony export */   template: () => (/* binding */ template)\n/* harmony export */ });\nvar popupImege = document.querySelector('.popup_type_image');\n// @todo: Темплейт карточки\nvar template = document.querySelector('#card-template').content;\n// @todo: DOM узлы\nvar placesList = document.querySelector('.places__list');\n// @todo: Функция создания карточки\nfunction createCard(cardInfo, removeCard, cardLike, popupImageOpen, myId, removeApi, likeCount, cardunlike) {\n  var newCard = template.querySelector('.places__item').cloneNode(true);\n  var cardImage = newCard.querySelector('.card__image');\n  cardImage.src = cardInfo.link;\n  cardImage.alt = cardInfo.name;\n  var cardTitle = newCard.querySelector('.card__title');\n  cardTitle.textContent = cardInfo.name;\n  var cardLikesArr = cardInfo.likes;\n  var cardOwnerId = cardInfo.owner._id;\n  if (cardLikesArr.length > 0) {\n    newCard.querySelector('.count').classList.add('card__like-button-count');\n    newCard.querySelector('.count').textContent = cardLikesArr.length;\n  } else if (cardLikesArr.length === 0) {\n    newCard.querySelector('.count').classList.remove('card__like-button-count');\n  }\n  ;\n  var likeButton = newCard.querySelector('.card__like-button');\n  if (cardLikesArr.find(function (item) {\n    return item._id === myId;\n  })) {\n    cardLike(likeButton);\n  }\n  likeButton.addEventListener('click', function () {\n    if (!likeButton.classList.contains('card__like-button_is-active')) {\n      likeCount(cardInfo._id).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.likes.length === 1) {\n          newCard.querySelector('.count').classList.add('card__like-button-count');\n          newCard.querySelector('.count').textContent = data.likes.length;\n          cardLike(likeButton);\n        } else {\n          newCard.querySelector('.count').textContent = data.likes.length;\n          cardLike(likeButton);\n        }\n      });\n    } else {\n      cardunlike(cardInfo._id).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.likes.length === 0) {\n          newCard.querySelector('.count').classList.remove('card__like-button-count');\n          newCard.querySelector('.count').textContent = '';\n          cardLike(likeButton);\n        } else {\n          newCard.querySelector('.count').textContent = data.likes.length;\n          cardLike(likeButton);\n        }\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  });\n  if (cardOwnerId !== myId) {\n    newCard.querySelector('.card__delete-button').classList.add('card__delete-button-hidden');\n  } else {\n    newCard.addEventListener('click', function (evt) {\n      if (evt.target.classList.contains('card__delete-button')) {\n        removeApi(cardInfo._id).then(function (res) {\n          if (res.ok) {\n            removeCard(newCard);\n          }\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n      ;\n    });\n  }\n  newCard.addEventListener('click', function (evt) {\n    if (evt.target.classList.contains('card__image')) {\n      popupImageOpen(popupImege, cardImage.src, cardImage.alt);\n    }\n    ;\n  });\n  return newCard;\n}\n;\n\n// @todo: Функция удаления карточки\nfunction deleteCard(cardElemeent) {\n  cardElemeent.remove();\n}\n;\nfunction likeCard(cardSimbol) {\n  cardSimbol.classList.toggle('card__like-button_is-active');\n}\n;\n\n//# sourceURL=webpack://mesto/./src/components/card.js?");

/***/ }),

/***/ "./src/components/constants.js":
/*!*************************************!*\
  !*** ./src/components/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   avatarButton: () => (/* binding */ avatarButton),\n/* harmony export */   inputDescription: () => (/* binding */ inputDescription),\n/* harmony export */   inputName: () => (/* binding */ inputName),\n/* harmony export */   popupAvatar: () => (/* binding */ popupAvatar),\n/* harmony export */   popupAvatarInput: () => (/* binding */ popupAvatarInput),\n/* harmony export */   popupList: () => (/* binding */ popupList),\n/* harmony export */   popupNewCard: () => (/* binding */ popupNewCard),\n/* harmony export */   popupProfile: () => (/* binding */ popupProfile),\n/* harmony export */   profileAddButton: () => (/* binding */ profileAddButton),\n/* harmony export */   profileButton: () => (/* binding */ profileButton),\n/* harmony export */   profileDescription: () => (/* binding */ profileDescription),\n/* harmony export */   profileTitle: () => (/* binding */ profileTitle)\n/* harmony export */ });\n// рекомендация ревьюера в прошлом проекте снести все переменные в отдельный файл\n\nvar profileButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar popupProfile = document.querySelector('.popup_type_edit');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupList = document.querySelectorAll('.popup');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar inputName = popupProfile.querySelector('.popup__input_type_name');\nvar inputDescription = popupProfile.querySelector('.popup__input_type_description');\nvar avatarButton = document.querySelector('.overlay-button');\nvar popupAvatar = document.querySelector('.popup_type_new-avatar');\nvar popupAvatarInput = popupAvatar.querySelector('.popup__input-avatar');\n\n\n//# sourceURL=webpack://mesto/./src/components/constants.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popupOpen) {\n  popupOpen.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closePopupByEsc);\n}\n;\nfunction closeModal(popupClose) {\n  popupClose.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closePopupByEsc);\n}\n;\nfunction closePopupByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var popupOpened = document.querySelector('.popup_is-opened');\n    closeModal(popupOpened);\n  }\n  ;\n}\n;\nvar popupsList = document.querySelectorAll('.popup');\npopupsList.forEach(function (item) {\n  item.classList.add('popup_is-animated');\n  item.addEventListener('click', function (evt) {\n    var popupContent = item.querySelector('.popup__content');\n    if (!popupContent.contains(evt.target)) {\n      closeModal(item);\n    }\n    ;\n  });\n});\n\n//# sourceURL=webpack://mesto/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage) {\n  // Находим элемент ошибки внутри самой функции\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  // Остальной код такой же\n  inputElement.classList.add('popup__input_type_error');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('popup__error_visible');\n};\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  // Находим элемент ошибки\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  // Остальной код такой же\n  inputElement.classList.remove('popup__input_type_error');\n  errorElement.classList.remove('popup__error_visible');\n  errorElement.textContent = '';\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement) {\n  var regex = /^[a-zа-яё\\s-]+$/i;\n  var buttonElement = formElement.querySelector('.popup__button');\n  if (!regex.test(inputElement.value) && inputElement.type === 'text' && inputElement.value.length > 0) {\n    // данные атрибута доступны у элемента инпута через ключевое слово dataset.\n    // обратите внимание, что в js имя атрибута пишется в camelCase (да-да, в\n    // HTML мы писали в kebab-case, это не опечатка)\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n    buttonElement.disabled = true;\n    buttonElement.classList.add('popup__button_disabled');\n  } else {\n    inputElement.setCustomValidity(\"\");\n    buttonElement.disabled = false;\n    buttonElement.classList.remove('popup__button_disabled');\n  }\n  if (!inputElement.validity.valid) {\n    // showInputError теперь получает параметром форму, в которой\n    // находится проверяемое поле, и само это поле\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n    buttonElement.disabled = true;\n    buttonElement.classList.add('popup__button_disabled');\n  } else {\n    // hideInputError теперь получает параметром форму, в которой\n    // находится проверяемое поле, и само это поле\n    hideInputError(formElement, inputElement);\n    buttonElement.disabled = false;\n    buttonElement.classList.remove('popup__button_disabled');\n  }\n};\nvar setEventListeners = function setEventListeners(formElement) {\n  // Находим все поля внутри формы,\n  // сделаем из них массив методом Array.from\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  // Обойдём все элементы полученной коллекции\n  inputList.forEach(function (inputElement) {\n    // каждому полю добавим обработчик события input\n    inputElement.addEventListener('input', function () {\n      // Внутри колбэка вызовем isValid,\n      // передав ей форму и проверяемый элемент\n      checkInputValidity(formElement, inputElement);\n    });\n  });\n};\nvar enableValidation = function enableValidation() {\n  // Найдём все формы с указанным классом в DOM,\n  // сделаем из них массив методом Array.from\n  var formList = Array.from(document.querySelectorAll('.popup__form'));\n  // Переберём полученную коллекцию\n  formList.forEach(function (formElement) {\n    // Для каждой формы вызовем функцию setEventListeners,\n    // передав ей элемент формы\n    setEventListeners(formElement);\n  });\n};\nvar clearValidation = function clearValidation(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement);\n  });\n  buttonElement.disabled = true;\n  buttonElement.classList.add('popup__button_disabled');\n};\n\n\n//# sourceURL=webpack://mesto/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImagePopup: () => (/* binding */ addImagePopup)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/constants.js */ \"./src/components/constants.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/api.js */ \"./src/components/api.js\");\n // добавьте импорт главного файла стилей \n\n\n\n\n\n\nfunction initialCards() {\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getAllPromises)().then(function (data) {\n    var usersInformation = data[0];\n    var cardsInformation = data[1];\n    cardsInformation.forEach(function (element) {\n      var newListCards = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, addImagePopup, usersInformation, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.deleteCardApi, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.addLikeApi, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.unlikeCardApi);\n      _components_card_js__WEBPACK_IMPORTED_MODULE_2__.placesList.append(newListCards);\n    });\n  });\n}\ninitialCards();\nfunction addImagePopup(item, attributeSrc, atributeAlt) {\n  var popapContentImage = item.querySelector('.popup__image');\n  popapContentImage.src = attributeSrc;\n  popapContentImage.alt = atributeAlt;\n  var paragraphAlt = item.querySelector('.popup__caption');\n  paragraphAlt.textContent = atributeAlt;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(item);\n}\n;\n_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileButton.addEventListener('click', function () {\n  _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputName.value = _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileTitle.textContent;\n  _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputDescription.value = _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileDescription.textContent;\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(document.forms['edit-profile']);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupProfile);\n});\n\n// Находим форму в DOM\nvar formProfileElement = document.querySelector('.popup__form');\n// Находим поля формы в DOM\nvar nameInput = formProfileElement.querySelector('.popup__input_type_name');\nvar jobInput = formProfileElement.querySelector('.popup__input_type_description');\n\n// Обработчик «отправки» формы, хотя пока\n// она никуда отправляться не будет\nfunction handleFormProfileSubmit(evt) {\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.editingProfile)(nameInput.value, jobInput.value).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n  }).then(function (data) {\n    _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileTitle.textContent = data.name;\n    _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileDescription.textContent = data.about;\n    document.querySelector('.button').textContent = 'Сохранить';\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupProfile);\n  }).catch(function (err) {\n    console.log(err);\n    document.querySelector('.button').textContent = 'Сохранить';\n  });\n}\n;\n\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\nformProfileElement.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  formProfileElement.querySelector('button').textContent = 'Сохранение...';\n  handleFormProfileSubmit();\n});\n_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileAddButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(document.forms['new-place']);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupNewCard);\n});\n_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupList.forEach(function (popup) {\n  var closeButton = popup.querySelector('.popup__close');\n  closeButton.addEventListener('click', function () {\n    return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popup);\n  });\n});\nvar formElementAddCard = document.forms['new-place'];\nvar plaseName = formElementAddCard.elements['place-name'];\nvar linkNewCard = formElementAddCard.elements['link'];\nfunction handleFormAddCardSubmit() {\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.addNewCardPost)(plaseName.value, linkNewCard.value).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    formElementAddCard.querySelector('.button').textContent = 'Сохранить';\n    var newCardInput = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(data, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, addImagePopup, data.owner._id, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.deleteCardApi, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.addLikeApi, _components_api_js__WEBPACK_IMPORTED_MODULE_5__.unlikeCardApi);\n    _components_card_js__WEBPACK_IMPORTED_MODULE_2__.placesList.prepend(newCardInput);\n    formElementAddCard.reset();\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupNewCard);\n  }).catch(function (err) {\n    console.log(err);\n  });\n}\n;\nformElementAddCard.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  formElementAddCard.querySelector('.button').textContent = 'Сохранение...';\n  handleFormAddCardSubmit();\n});\n\n// Вызовем функцию\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.enableValidation)();\n_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.avatarButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(document.forms['new-avatar']);\n  document.forms['new-avatar'].reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar);\n});\n_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar.querySelector('.button').textContent = 'Сохранение...';\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.addAvatarApi)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatarInput.value).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n  }).then(function (data) {\n    document.querySelector('.profile__image').style.backgroundImage = \"url(\".concat(data.avatar, \")\");\n    _components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar.querySelector('.button').textContent = 'Сохранить';\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(_components_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar);\n  }).catch(function (err) {\n    console.log(err);\n  });\n});\n\n//# sourceURL=webpack://mesto/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;