import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
// import mainApi from '../../utils/MainApi'
// import { readMovies, filterMovies, addSavedFlag } from '../../utils/MoviesSearch';
// import { useWindowDimensions } from '../../hooks/useDimensions';
// import { getVisualProps } from '../../utils/VisualProps';
import Preloader from '../Preloader/Preloader';
import {SHORT_MOVIE_DURATION_MIN} from '../../utils/consts';
import './Movies.css';

function Movies({
  savedMovies, onSubmitSearch, movies, isLoading,
  loadingError, onBookmarkClick, isMovieAdded,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  // eslint-disable-next-line max-len
  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION_MIN);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };


  return (
    <main className="movies">
      <Navigation />
      <SearchForm
        onFilterClick={onFilterClick}
        onSearch={onSubmitSearch}
      />
      {isLoading && <Preloader />}

      {!isLoading && loadingError === ''
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
      <Footer />
    </main>
  );
}

export default Movies;
