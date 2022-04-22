import { BASE_URL } from './auth';

class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
}

  _errorHandler(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`)
  }


  aboutProject() {
    return fetch( this._url + '/', {
      credentials: 'include',
      headers: this._getHeaders(),
    })
    .then(this._errorHandler);
  }

  movies(data) {
    return fetch( this._url + '/movies', {
      credentials: 'include',
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._errorHandler)
  }

  savedMovies() {
    return fetch( this._url + '/saved-movies', {
      credentials: 'include',
      headers: this._getHeaders(),
    })
    .then(this._errorHandler);
  }

  _getHeaders(){
    const token = localStorage.getItem('jwt');
    return {
      ...this._headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

const api = new Api({
  // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  baseUrl: BASE_URL,
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
})

export default api;



// import { BASE_URL } from './auth';

// class Api {
//   constructor(config) {
//     this._url = config.baseUrl;
//     this._headers = config.headers;
// }

//   _errorHandler(res) {
//     if (res.ok) {
//       return res.json()
//     }
//     return Promise.reject(`Произошла ошибка: ${res.status}`)
//   }


//   getUser() {
//     return fetch( this._url + '/users/me', {
//       credentials: 'include',
//       headers: this._getHeaders(),
//     })
//     .then(this._errorHandler);
//   }

//   setUser(data) {
//     return fetch( this._url + '/users/me', {
//       credentials: 'include',
//       method: 'PATCH',
//       headers: this._getHeaders(),
//       body: JSON.stringify({
//         name: data.name,
//         about: data.about
//       })
//     })
//     .then(this._errorHandler)
//   }

//   getCards() {
//     return fetch( this._url + '/cards', {
//       credentials: 'include',
//       headers: this._getHeaders(),
//     })
//     .then(this._errorHandler);
//   }

//   addNewCard(data) {
//     return fetch( this._url + '/cards', {
//       credentials: 'include',
//       method: 'POST',
//       headers: this._getHeaders(),
//       body: JSON.stringify({
//         name: data.name,
//         link: data.link
//       })
//     })
//     .then(this._errorHandler);
//   }

//   deleteCard(id) {
//     return fetch( this._url + '/cards/' + id, {
//       credentials: 'include',
//       method: 'DELETE',
//       headers: this._getHeaders(),
//     })
//     .then(this._errorHandler);
//   }

//   changeLikeCardStatus(id, condition) {
//     return fetch( this._url + '/cards/' + id + '/likes', {
//       credentials: 'include',
//       method: condition ? 'PUT' : 'DELETE',
//       headers: this._getHeaders(),
//     })
//     .then(this._errorHandler);
//   }

//   userAvatarUpdate(data) {
//     return fetch( this._url + '/users/me/avatar', {
//       credentials: 'include',
//       method: 'PATCH',
//       headers: this._getHeaders(),
//       body: JSON.stringify({
//         avatar: data.avatar
//       })
//     })
//     .then(this._errorHandler)
//   }

//   _getHeaders(){
//     const token = localStorage.getItem('jwt');
//     return {
//       ...this._headers,
//       'Authorization': `Bearer ${token}`,
//     }
//   }
// }

// const api = new Api({
//   // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
//   baseUrl: BASE_URL,
//   credentials: 'include',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json;charset=utf-8',
//   }
// })

// export default api;
