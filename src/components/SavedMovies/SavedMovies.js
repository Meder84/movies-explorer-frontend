import React, { useState }  from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({
  savedMoviesPage, movies, isLoading, loadingError, onClickSaveDelete, selectedMovies,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([]);

  const filterShortFilm = (movies) => movies.filter((item) => item.duration < 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  React.useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      console.dir(searchQuery)
      console.dir(data)
      const regex = new RegExp(searchQuery, 'gi');
      return data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
    }
    return [];
  };

  const searchInSavedHandler = (searchQuery) => {
    setMoviesToRender(searchFilter(movies, searchQuery));
      console.dir(movies)
      console.dir(searchQuery)
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
        onSearch={searchInSavedHandler}
      />

      {isLoading && <Preloader />}

      {!isLoading
      && loadingError === ''
      && (
        <MoviesCardList
          customMoviesCardList='saved-movies__content-container'
          customMoviesCardDescriptionContainer='saved-movies__description-container'
          savedMoviesPage={savedMoviesPage}
          movies={filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender}
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
