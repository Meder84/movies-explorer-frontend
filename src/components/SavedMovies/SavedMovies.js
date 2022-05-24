import React from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <div className="saved-movies">
      <Navigation />
      <SearchForm  customSearchFormCheckboxContainer='saved-movies__search-form__checkbox-container'/>
      <MoviesCardList
        customMoviesCardList='saved-movies__content-container'
        customMoviesCardDescriptionContainer='saved-movies__description-container'
        // customMoviesCardLikeImage='saved-movies__delete-image'
        customShowMoreItems='saved-movies__hide-block-more-items'
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
