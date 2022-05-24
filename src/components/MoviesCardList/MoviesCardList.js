import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './MoviesCardList.css';

function DeleteButton(props) {

  const handleDelete = () => {
    props.onDelete(props.movie);
  };

  return (
    <button
      className='saved-movies__delete-image'
      onClick={handleDelete}
    />
  );
}

function MoviesCardList(props) {

  const handleChange = (movieId) => {
    props.onSave(movieId);
  };

  const handleDelete = (movie) => {
    props.onDelete(movie);
  };

  function getMoviesList (moviesList) {
    if (moviesList.length > 0) {
      return moviesList.map((moviesCard) => (
        <MoviesCard
          customMoviesCardDescriptionContainer={props.customMoviesCardDescriptionContainer}
          // customMoviesCardLikeImage={props.customMoviesCardLikeImage}
          key={moviesCard.movieId}
          movie={moviesCard}
          onClick={props.onClick}
        >
          { props.savedFilms ?
            <DeleteButton
              onDelete={handleDelete}
              movie={moviesCard}
            /> :
            <FilterCheckbox
              isChecked={moviesCard.saved}
              movieId={moviesCard.movieId}
              onChange={handleChange}
            />
          }
        </MoviesCard>
      ))
    }
  }

  return (
    <>
      <ul className={`movies-card-list ${props.customMoviesCardList}`}>
        {props.isLoading ? <Preloader /> : getMoviesList(props.moviesList) }
      </ul>
      <div className={`show-more-items ${props.customShowMoreItems}`}>
        <div className='show-more-items__container'>
          <p className={`show-more-items__text opacity ${props.customShowMoreItemText}`}>
            {`Еще ${props.errorMessage}`}
          </p>
        </div>
      </div>
    </>
  )
}



export default MoviesCardList;
