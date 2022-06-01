import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import Header from '../Header/Header';

function Movies({
  savedMoviesPage, onSubmitSearch, movies, isLoading,
  loadingError, onClickSaveDelete, selectedMovies,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  const handleClickImage = (movie) => {
    window.open(movie.trailerLink, '_blank');
  };

  return (
    <main className="movies">
      <Header>
        <Navigation />
      </Header>
      <SearchForm
        onFilterClick={onFilterClick}
        onSearch={onSubmitSearch}
      />
      {isLoading && <Preloader />}

      {!isLoading && loadingError === ''
        && (
        <MoviesCardList
          savedMoviesPage={savedMoviesPage}
          movies={filterIsOn ? filterShortFilm(movies) : movies}
          onClickSaveDelete={onClickSaveDelete}
          selectedMovies={selectedMovies}
          onClickImage={handleClickImage}
        />
      )}

      {
        !isLoading
        && loadingError !== ''
        && <div className="error-message">{loadingError}</div>
      }
      <Footer />
    </main>
  );
}

export default Movies;
