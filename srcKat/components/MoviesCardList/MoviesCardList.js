import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/consts';
import './MoviesCardList.css';

function DeleteButton(props) {

  const handleDelete = () => {
    props.onDelete(props.movie);
  };

  return (
    <button
      className='movies-card__delete-image opacity'
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

  const getMoviesList = (moviesList) => {
    if (moviesList.length > 0) {
      return moviesList.map((moviesCard) => (
        <MoviesCard
          key={moviesCard.movieId} movie={moviesCard}
          onClick={props.onClick}
        >
          { props.savedFilms
            ? <DeleteButton
              onDelete={handleDelete}
              movie={moviesCard}
            />
            : <FilterCheckbox
              isChecked={moviesCard.saved}
              movieId={moviesCard.movieId}
              onChange={handleChange}
            />
          }
        </MoviesCard>
      ));
    }

    return (
      <p className="list__no-result-box">
        {props.errorMessage}
      </p>
    );
  };

  return (
    <ul className='movies-card-list'>
      <li>
        {props.isLoading ? <Preloader /> : getMoviesList(props.moviesList) }
      </li>
    </ul>
  )
}

export default MoviesCardList;


// function handleShowMoreItems() {
  //   return (
  //     <div className='show-more-items'>
  //       <button
  //         className='show-more-items__button opacity'
  //         onClick={renderMore}
  //       >
  //         {/* {`Еще ${props.errorMessage}`} */}
  //         Еще
  //       </button>
  //     </div>
  //   )
  // }
