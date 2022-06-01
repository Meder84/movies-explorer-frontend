import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { SHORT_MOVIE_DURATION_MIN } from '../../utils/constants';
import './Movies.css';

function Movies({
  savedMovies, onSubmitSearch, movies, isLoading, loadingError, onBookmarkClick, isMovieAdded,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  // eslint-disable-next-line max-len
  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION_MIN);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <div className="movies">
      <SearchForm onFilterClick={onFilterClick} onSearch={onSubmitSearch} />

      {isLoading && <Preloader />}

      {!isLoading
      && loadingError === ''
      && (
      <MoviesCardList
        savedMovies={savedMovies}
        movies={filterIsOn ? filterShortFilm(movies) : movies}
        onBookmarkClick={onBookmarkClick}
        isMovieAdded={isMovieAdded}
      />
      )}

      {
        !isLoading
        && loadingError !== ''
        && <div className="movies__error">{loadingError}</div>
      }
    </div>
  );
}

export default Movies;
