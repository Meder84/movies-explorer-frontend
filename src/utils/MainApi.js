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

  getSavedMovies() {
    return fetch( this._url + '/movies', {
      headers: this._getHeaders(),
    })
    .then(this._errorHandler);
  }

  saveMovie(data) {
    return fetch( this._url + '/movies', {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: data.country || 'unknown',
        director: data.director || 'unknown',
        duration: data.duration || 'No data',
        year: data.year || 'unknown',
        description: data.description || 'No description',
        image: data.image,
        trailerLink: data.trailerLink || 'No trailerLink',
        thumbnail: data.image || 'No image',
        movieId: data.id || 'No data',
        nameRU: data.nameRU,
        nameEN: data.nameEN || 'No name',
      })
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

  _getHeaders(){
    const token = localStorage.getItem('jwt');
    return {
      ...this._headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
});

export default mainApi;
