function checkingServersResponse(res) {
  if(res.ok) {
    return res.json()
  }
  return Promise.reject(`Error ${res.status}`)
};


const config = ({
  commonUrl: 'https://nomoreparties.co/v1/wff-cohort-13/',
  myToken: 'b831de0a-d6a1-4d69-8d59-4d7c5feea1c2'
});


export function getUsersInformation() {
    return fetch (`${config.commonUrl}users/me`, {
    headers: {
        authorization: `${config.myToken}`
      }
   })
   .then(res => {
    return checkingServersResponse(res)
   })
};


export function getCardsInformation() {
  return fetch(`${config.commonUrl}cards`, {
  headers: {
    authorization: `${config.myToken}`
  }
})
.then(res => {
  return checkingServersResponse(res)
 })
};

const promises = [getUsersInformation(), getCardsInformation()];


export function getAllPromises() {
 return Promise.all(promises)
};


export function editingProfile(nameInput, aboutInput) {
  return fetch(`${config.commonUrl}users/me`, {
  method: 'PATCH',
  headers: {
    authorization: `${config.myToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: nameInput,
    about: aboutInput
  })
})
.then(res => {
  return checkingServersResponse(res)
})
};


export function addNewCardPost(nameInput, linkInput) {
return fetch(`${config.commonUrl}cards`, {
  method: 'POST',
  headers: {
    authorization: `${config.myToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: nameInput,
    link: linkInput
  })
})
.then(res => {
  return checkingServersResponse(res)
})
};


export function deleteCardApi(cardId) {
  return fetch (`${config.commonUrl}cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `${config.myToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: cardId
    })
  })
  .then(res => {
    return checkingServersResponse(res)
  })
};


export function addLikeApi(cardId) {
  return fetch(`${config.commonUrl}cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: `${config.myToken}`
    }})
    .then(res => {
      return checkingServersResponse(res)
    })
};


export function unlikeCardApi(cardId) {
  return fetch(`${config.commonUrl}cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `${config.myToken}`
    }})
    .then(res => {
      return checkingServersResponse(res)
    })
};

export function addAvatarApi(url) {
  return fetch(`${config.commonUrl}users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: `${config.myToken}`,
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
      avatar: url
     })
  })
  .then (res => {
    return checkingServersResponse(res)
  })
};


    
  
  
   

   