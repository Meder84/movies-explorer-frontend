import React, { useState }  from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({
  savedMovies, isLoading, loadingError, onClickSaveDelete,
  selectedMovies, onSubmitSearch,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = (cards) => cards.filter((item) => item.duration < 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  const handleClickImage = (movie) => {
    window.open(movie.trailerLink, '_blank');
  };

  return (
    <div className="saved-movies">
      <Header>
        <Navigation />
      </Header>
      <SearchForm
        customSearchFormCheckboxContainer='saved-movies__search-form__checkbox-container'
        onFilterClick={onFilterClick}
        onSearch={onSubmitSearch}
      />

      {isLoading && <Preloader />}

      {!isLoading
      && loadingError === ''
      && (
        <MoviesCardList
          customMoviesCardList='saved-movies__content-container'
          customMoviesCardDescriptionContainer='saved-movies__description-container'
          savedMoviesPage={true}
          movies={filterIsOn ? filterShortFilm(savedMovies) : savedMovies}
          onClickSaveDelete={onClickSaveDelete}
          onClickImage={handleClickImage}
          selectedMovies={selectedMovies}
        />
      )}

      {
        !isLoading
        && loadingError !== ''
        && <div className="error-message">{loadingError}</div>
      }

      <Footer />
    </div>
  );
}

export default SavedMovies;
