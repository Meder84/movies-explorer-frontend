import React from 'react'
// import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import Footer from '../Footer/Footer';
import './Movies.css';
import Navigation from '../Navigation/Navigation';

function Movies() {
  return (
    <nav className="movies">
      <Navigation />
      {/* <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
      <Footer /> */}
    </nav>
  );
}

export default Movies;
