export function getUsersInformation() {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-13/users/me', {
    headers: {
        authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'
      }
   })
   .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
   .then((res) => {
    document.querySelector('.profile__title').textContent = res.name;
    document.querySelector('.profile__description').textContent = res.about;
    document.querySelector('.profile__image').style.backgroundImage = `url(${res.avatar})`;

    return res._id;
   });
};

export function getCardsInformation() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-13/cards', {
  headers: {
    authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'
  }
})
.then((res) => {
  if (res.ok) {
     return res.json()
  }
})
};

const promises = [getUsersInformation(), getCardsInformation()];


export function getAllPromises() {
 return Promise.all(promises)
};


export function editingProfile(nameInput, aboutInput) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me', {
  method: 'PATCH',
  headers: {
    authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: nameInput,
    about: aboutInput
  })
}); 
};


export function addNewCardPost(nameInput, linkInput) {
return fetch('https://nomoreparties.co/v1/wff-cohort-13/cards', {
  method: 'POST',
  headers: {
    authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: nameInput,
    link: linkInput
  })
})
};


export function deleteCardApi(cardId) {
  return fetch (`https://nomoreparties.co/v1/wff-cohort-13/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: cardId
    })
  })
};


export function addLikeApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-13/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'
    }})
};


export function unlikeCardApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-13/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'
    }})
};

export function addAvatarApi(url) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
      avatar: url
     })
  })
};


    
  
  
   

   