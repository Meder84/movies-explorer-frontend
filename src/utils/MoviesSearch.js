import moviesApi, { MOVIES_URL } from './MoviesApi';
import { NOT_FOUND_ERR_BLOCK } from './consts';

export const readMovies = async () => {
  try {
    const movies = await moviesApi.getAllMovies();

    const moviesList = movies.map(movie => {
      const imageURL = movie.image ? movie.image.url : '';
      return {
        ...movie,
        image: `${MOVIES_URL}${imageURL}`,
      };
    });

    return Promise.resolve(moviesList);

  }

  catch(err) {
    console.log(err)
    const errMsg = [
      `Во время запроса произошла ошибка.`,
      `Возможно, проблема с соединением или сервер недоступен.`,
      `Подождите немного и попробуйте ещё раз`,
    ];

    return Promise.reject(errMsg);
  };
};

export const filterMovies = (data, searchQuery) => {
  if (searchQuery) {
    const regex = new RegExp(searchQuery, 'gi');
    const filterData = data.filter((item) =>
    regex.test(item.nameRU) || regex.test(item.nameEN) ||
    regex.test(item.director) || regex.test(item.country) ||
    regex.test(item.year));

    if (filterData.length > 0) return Promise.resolve(filterData);
    return Promise.reject(NOT_FOUND_ERR_BLOCK);
  }
  return [];
};

export const addSavedFlag = (films, savedFilms) => {
  return films.map((film) => {
    const {
      id, country, director, duration,
      year, description, image, trailerLink,
      nameRU, nameEN, thumbnail,
    } = film;

    const saved = savedFilms.filter(savedFilm => savedFilm.movieId === id);

    let savedId = 0;
    if (saved.length === 1) savedId = saved[0]._id;

    const newFilm = {
      id, country, director, duration,
      year, description, image, trailerLink,
      nameRU, nameEN, thumbnail, saved: savedId,
    };

    return newFilm;
  });
};
