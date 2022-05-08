import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      <ul className={`movies-card-list ${props.customMoviesCardList}`}>
        <MoviesCard
          customMoviesCardDescriptionContainer={props.customMoviesCardDescriptionContainer}
          customMoviesCardLikeImage={props.customMoviesCardLikeImage}
        />
      </ul>
      <div className={`show-more-items ${props.customShowMoreItems}`}>
        <div className='show-more-items__container'>
          <p className={`show-more-items__text opacity ${props.customShowMoreItemText}`}>Еще</p>
        </div>
      </div>
    </>
  )
}



export default MoviesCardList;
