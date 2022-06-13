import React, { useState, useEffect }  from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import { SAVED_MOVIES_STOREGE, SAVED_ERR_API_TEXT, DELETE_ERROR, SWITCH_STORAGE } from '../../utils/consts';
import { filterMovies } from '../../utils/MoviesSearch';
import './SavedMovies.css';

function SavedMovies() {
  const [isChecked, setisChecked] = useState(localStorage.getItem(SWITCH_STORAGE) === 'true');
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then(({data}) => {
        setSavedMovies(data);
        localStorage.setItem(SAVED_MOVIES_STOREGE, JSON.stringify(data));
      })
      .catch(() => {
        setError(SAVED_ERR_API_TEXT);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return (() => {
      localStorage.removeItem(SAVED_MOVIES_STOREGE);
    });
  }, []);

  const handleDelete = (movie) => {
    mainApi.deleteMovie(movie._id)
    .then(() => {
      const newArray = savedMovies.filter(item => item.movieId !== movie.movieId);

      setSavedMovies(newArray);
    })
    .catch((err) => {
      console.log(err);
      setError(DELETE_ERROR)
    });
  };

  const getSavedMovies = async (searchString) => {
    let found = [];
    setIsLoading(true);
    if (localStorage.getItem(SAVED_MOVIES_STOREGE)) localStorage.removeItem(SAVED_MOVIES_STOREGE);

    try {
      found = await filterMovies(savedMovies, searchString.toLowerCase());
    } catch(err) {
      setError(err);
    } finally {
      setIsLoading(false);
      localStorage.setItem(SAVED_MOVIES_STOREGE, JSON.stringify(found));
    };
  };

  const handleSearchSubmit = (searchString) => {
    const string = searchString || '';
    if (string.length === 0) {
      localStorage.setItem(SAVED_MOVIES_STOREGE, JSON.stringify(savedMovies));
    } else {
      getSavedMovies(searchString);
    }
  };

  const filterShortFilm = (cards) => cards.filter((item) => item.duration < 40);

  const handleOnChange = (e) => {
    setisChecked(e.target.checked);
    localStorage.setItem(SWITCH_STORAGE,`${e.target.checked}`);
  };

  const handleClickImage = (movie) => {
    window.open(movie.trailerLink, '_blank');
  };

  const selectedMovies = (movie) => savedMovies.some((item) => item.movieId === movie.id);

  return (
    <div className="saved-movies">
      <Header>
        <Navigation />
      </Header>
      <SearchForm
        customSearchFormCheckboxContainer='saved-movies__search-form__checkbox-container'
        onSearch={handleSearchSubmit}
        isChecked={isChecked}
        onChange={handleOnChange}
      />

      {isLoading && <Preloader />}

      {!isLoading
      && error === ''
      && (
        <MoviesCardList
          customMoviesCardList='saved-movies__content-container'
          customMoviesCardDescriptionContainer='saved-movies__description-container'
          savedMoviesPage={true}
          movies={isChecked ? filterShortFilm(savedMovies) : savedMovies}
          onClickImage={handleClickImage}
          selectedMovies={selectedMovies}
          onDelete={handleDelete}
        />
      )}

      {
        !isLoading
        && error !== ''
        && <div className="error-message">{error}</div>
      }

      <Footer />
    </div>
  );
}

export default SavedMovies;
