import { BASE_URL } from './auth';

class MainApi {
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

  getUser() {
    return fetch( this._url + '/users/me', {
      headers: this._getHeaders(),
    })
    .then(this._errorHandler);
  }

  updateUser(data) {
    return fetch( this._url + '/users/me', {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
    .then(this._errorHandler)
  }

  getMovies() {
    return fetch( this._url + '/movies', {
      headers: this._getHeaders(),
    })
    .then(this._errorHandler);
  }

  postNewMovie(data) {
    return fetch( this._url + '/movies', {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(data)
    })
    .then(this._errorHandler);
  }

  deleteMovie(id) {
    return fetch( this._url + '/movies/' + id, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
    .then(this._errorHandler);
  }

  // changeLikeCardStatus(id, isLiked) {
  //   return fetch( this._url + '/cards/' + id + '/likes', {
  //     method: isLiked ? 'PUT' : 'DELETE',
  //     headers: this._getHeaders()
  //   })
  //   .then(this._errorHandler);
  // }

  _getHeaders(){
    const token = localStorage.getItem('jwt');
    return {
      ...this._headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

const mainApi = new MainApi({
  // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
});

export default mainApi;
