import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Divider from '../ui/Divider/Divider';
import './SavedMovies.css';
import { SHORT_MOVIE_DURATION_MIN } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  savedMovies, movies, isLoading, loadingError, onBookmarkClick, isMovieAdded,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  // eslint-disable-next-line max-len
  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION_MIN);
  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  const [moviesToRender, setMoviesToRender] = useState([]);

  React.useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      return data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
    }
    return [];
  };

  const searchInSavedHandler = (searchQuery) => {
    setMoviesToRender(searchFilter(movies, searchQuery));
  };

  return (
    <div className="saved-movies">
      <SearchForm onFilterClick={onFilterClick} onSearch={searchInSavedHandler} />

      {isLoading && <Preloader />}

      {!isLoading
      && loadingError === ''
      && (
        <MoviesCardList
          savedMovies={savedMovies}
          movies={filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender}
          onBookmarkClick={onBookmarkClick}
          isMovieAdded={isMovieAdded}
        />
      )}

      {
        !isLoading
        && loadingError !== ''
        && <div className="movies__error">{loadingError}</div>
      }
      <Divider />
    </div>
  );
}

export default SavedMovies;
