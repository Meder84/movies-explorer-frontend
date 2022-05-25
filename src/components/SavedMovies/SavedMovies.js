import React, { useEffect, useState }  from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
// import mainApi from '../../utils/MainApi';
// import { filterMovies } from '../../utils/MoviesSearch';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({
  savedMovies, movies, isLoading, loadingError, onBookmarkClick, isMovieAdded,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  // eslint-disable-next-line max-len
  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < 40);
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
      <Navigation />
      <SearchForm
        customSearchFormCheckboxContainer='saved-movies__search-form__checkbox-container'
        onFilterClick={onFilterClick}
        onSearch={searchInSavedHandler}
      />

      {isLoading && <Preloader />}

      {!isLoading
      && loadingError === ''
      && (
        <MoviesCardList
          customMoviesCardList='saved-movies__content-container'
          customMoviesCardDescriptionContainer='saved-movies__description-container'
          // customMoviesCardLikeImage='saved-movies__delete-image'
          customShowMoreItems='saved-movies__hide-block-more-items'
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

      <Footer />
    </div>
  );
}

export default SavedMovies;
