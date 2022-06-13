import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import { SHORT_FILMS, SAVE_FILM_ERR_TEXT, SEARCH_STRING_STORAGE,
  MOVIES_STOREGE, SAVED_ERR_API_TEXT, DELETE_ERROR, SWITCH_STORAGE,
} from '../../utils/consts';
import mainApi from '../../utils/MainApi';
import { readMovies, filterMovies, addSavedFlag } from '../../utils/MoviesSearch';
import './Movies.css';

function Movies() {
  const [isChecked, setisChecked] = useState(localStorage.getItem(SWITCH_STORAGE) === 'true');
  const [isLoading, setIsLoading] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let found, foundChecked;
    const fromStorage = localStorage.getItem(MOVIES_STOREGE);
    if (fromStorage) {
      found = JSON.parse(fromStorage);
      setFoundMovies(found);
    }

    mainApi.getSavedMovies()
    .then(({data}) => {
      setSavedMovies(data);
      foundChecked = addSavedFlag(found, data.slice()); // slice() возвращаем новый массив, содержащий копию исходного массива.
      setFoundMovies(foundChecked);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const getAllMovies = async (searchString) => {
    setFoundMovies([]);
    if (localStorage.getItem(MOVIES_STOREGE)) localStorage.removeItem(MOVIES_STOREGE);
    if (localStorage.getItem(SEARCH_STRING_STORAGE)) localStorage.removeItem(SEARCH_STRING_STORAGE);

    try {
      setIsLoading(true);

      const movies = await readMovies();

      const found = await filterMovies(movies, searchString.toLowerCase());

      const foundChecked = addSavedFlag(found, savedMovies.slice());
      setFoundMovies(foundChecked);

      localStorage.setItem(MOVIES_STOREGE, JSON.stringify(foundChecked));
      localStorage.setItem(SEARCH_STRING_STORAGE, JSON.stringify(searchString));

    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    };
  };

  const handleSearchSubmit = (searchString) => {
    getAllMovies(searchString);
  };

  const saveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        console.log(err);
        setError(SAVE_FILM_ERR_TEXT)
      });
  };

  const deleteMovie = (movie) => {
    const movieId = savedMovies.find((item) => item.movieId === movie.id)._id;
    if(!movieId) throw new Error(SAVED_ERR_API_TEXT);

    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newArray = savedMovies.filter((item) => item._id !== movieId);
        setSavedMovies(newArray);
      })
      .catch((err) => {
        console.log(err);
        setError(DELETE_ERROR)
      });
  };

  const onClickSaveDelete = (movie, select) => {
    (select ? saveMovie(movie) : deleteMovie(movie));
  }

  const filterShortFilm = (movies) => movies.filter((item) => item.duration < SHORT_FILMS);

  const handleOnChange = (e) => {
    setisChecked(e.target.checked);
    localStorage.setItem(SWITCH_STORAGE,`${e.target.checked}`);
  };

  const handleClickImage = (movie) => {
    window.open(movie.trailerLink, '_blank');
  };

  const selectedMovies = (movie) => savedMovies.some((item) => item.movieId === movie.id);

  return (
    <main className="movies">
      <Header>
        <Navigation />
      </Header>
      <SearchForm
        onSearch={handleSearchSubmit}
        isChecked={isChecked}
        onChange={handleOnChange}
      />
      {isLoading && <Preloader />}

      {!isLoading
        && (
        <MoviesCardList
          savedMoviesPage={false}
          movies={isChecked ? filterShortFilm(foundMovies) : foundMovies}
          onClickSaveDelete={onClickSaveDelete}
          selectedMovies={selectedMovies}
          onClickImage={handleClickImage}
        />
      )}

      {
        !isLoading
        && <p className='error-message'>{error}</p>
      }
      <Footer />
    </main>
  );
}

export default Movies;
