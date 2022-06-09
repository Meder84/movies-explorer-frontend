import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import { SHORT_FILMS, SAVE_FILM_ERR_TEXT, NOT_FOUND_ERR_BLOCK } from '../../utils/consts';
import mainApi from '../../utils/MainApi';
import { readMovies, filterMovies, addSavedFlag } from '../../utils/MoviesSearch';
import './Movies.css';

function Movies() {
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchDisabled, setIsSwitchDisabled] = useState(true);

  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [findErrorMessage, setFindErrorMessage] = useState('');

  useEffect(() => {
    let found, foundChecked;
    const fromStorage = localStorage.getItem('foundMovies');
    if (fromStorage) {
      found = JSON.parse(fromStorage);
      setFoundMovies(found);
      setIsSwitchDisabled(found.length === 0);
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

  useEffect(() => {
    const fromStorage = localStorage.getItem('foundMovies');
    if (!fromStorage) return;
    const found = JSON.parse(fromStorage);

    if (isSwitchOn) {
      const foundFilter = found.filter(item => item.duration <= SHORT_FILMS);
      setFoundMovies(foundFilter);
      if (foundFilter.length === 0) {
        setFindErrorMessage(NOT_FOUND_ERR_BLOCK);
      }
    } else {
      setFoundMovies(found);
    }
  }, [isSwitchOn]);

    // Поиск фильмов

  const searchMain = async (searchString) => {
    setFoundMovies([]);
    // setShowedMovies([]);
    setFindErrorMessage('');
    // setIsSwitchOn(false);
    setIsSwitchDisabled(true);
    if (localStorage.getItem('foundMovies')) localStorage.removeItem('foundMovies');
    if (localStorage.getItem('searchString')) localStorage.removeItem('searchString');

    try {
      setIsLoading(true);

      // Читаем фильмы с сервиса beatfilm-movies
      const movies = await readMovies();

      // Выполняем поиск
      const found = await filterMovies(searchString.toLowerCase(), movies);

      // Добавить признак того, сохранена ли карточка
      const foundChecked = addSavedFlag(found, savedMovies.slice());
      setFoundMovies(foundChecked);

      localStorage.setItem('foundMovies', JSON.stringify(foundChecked));
      localStorage.setItem('searchString', JSON.stringify(searchString));
      setIsSwitchDisabled(false);

    } catch (err) {
      setFindErrorMessage(err);
    } finally {
      setIsLoading(false);
    };
  };

  // Параметр searchString получаем из компонента SearchForm
  const handleSearchSubmit = (searchString) => {
    searchMain(searchString);
  };

  const handleSaveClick = async (movieId) => {
    try {
      // Находим сохраняемый/удаляемый фильм
      const films = foundMovies.filter(currentMovie => currentMovie.movieId === movieId);
      if (films.length !== 1) throw new Error(SAVE_FILM_ERR_TEXT);

      let newFoundMovies = [];

      if (films[0].saved === 0) {
        delete films[0].saved;
        const result = await mainApi.saveMovie(films[0]);

        const {
          movieId, country, director, duration, year,
          description, image, trailerLink, nameRU, nameEN,
          thumbnail, _id,
        } = result;

        const newFilm = {
          movieId, country, director, duration, year,
          description, image, trailerLink, nameRU, nameEN,
          thumbnail, saved: _id,
        };

        // Дополняем массивы foundMovies & savedMovies
        newFoundMovies = foundMovies.map((item) => (
          item.movieId === movieId ? newFilm : item
        ));

        setFoundMovies(newFoundMovies);

        const newSavedMovies = savedMovies.slice();
        newSavedMovies.push(result);
        setSavedMovies(newSavedMovies);

      } else {
        const result = await mainApi.deleteMovie(films[0].saved);

        const {
          movieId, country, director, duration, year,
          description, image, trailerLink, nameRU, nameEN,
          thumbnail,
        } = result;

        const newFilm = {
          movieId, country, director, duration, year,
          description, image, trailerLink, nameRU, nameEN,
          thumbnail, saved: 0,
        };

        // Дополняем массивы foundMovies & savedMovies
        newFoundMovies = foundMovies.map((item) => (
          item.movieId === movieId ? newFilm : item
        ));

        setFoundMovies(newFoundMovies);

        const newSavedMovies = savedMovies.filter((item) => (
          item.movieId !== movieId
        ));
        setSavedMovies(newSavedMovies);
      }

      if (localStorage.getItem('foundMovies')) localStorage.removeItem('foundMovies');
      localStorage.setItem('foundMovies', JSON.stringify(newFoundMovies));

    } catch(err) {
      console.log(err);
    }
  };

  // const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < SHORT_FILMS);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleClickImage = (movie) => {
    window.open(movie.trailerLink, '_blank');
  };

  const selectedMovies = (movie) => savedMovies.some((item) => item.movieId === movie.movieId);

  return (
    <main className="movies">
      <Header>
        <Navigation />
      </Header>
      <SearchForm
        onFilterClick={handleSwitchChange}
        onSearch={handleSearchSubmit}
        isSwitchOn={isSwitchOn}
      />
      {isLoading && <Preloader />}

      {!isLoading
        && (
        <MoviesCardList
          savedMoviesPage={false}
          movies={foundMovies}
          // onClickSaveDelete={handleSaveClick}
          selectedMovies={selectedMovies}
          onClickImage={handleClickImage}
          onSave={handleSaveClick}
        />
      )}

      {/* {
        !isLoading
        && <div className="error-message">{loadingError}</div>
      } */}
      <Footer />
    </main>
  );
}

export default Movies;
