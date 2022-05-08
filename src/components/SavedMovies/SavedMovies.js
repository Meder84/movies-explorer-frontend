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
      <SearchForm />
      <MoviesCardList
        customShowMoreItemText='saved-movies__hide-text'
        customMoviesCardLikeImage='saved-movies__like-image'
      >
      </MoviesCardList>
        <SearchForm  customSearchFormCheckboxContainer='saved-movies__search-form__checkbox-container'/>
      <Footer />
    </div>
  );
}

export default SavedMovies;
