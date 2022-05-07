import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      <ul className='movies-card-list'>
        <MoviesCard />
      </ul>
      <div className='show-more-items'>
        <div className='show-more-items__container'>
          <p className='show-more-items__text'>Еще</p>
        </div>
      </div>
    </>
  )
}



export default MoviesCardList;
