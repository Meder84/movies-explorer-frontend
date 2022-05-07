import React from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';
import Navigation from '../Navigation/Navigation';

function Movies() {
  return (
    <main className="movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

export default Movies;
