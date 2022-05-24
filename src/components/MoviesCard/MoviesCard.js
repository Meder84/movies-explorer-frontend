import React from 'react';
import './MoviesCard.css';

function MoviesCard(props, { movie, children, onClick }) {
  const {
    nameRU, duration, trailer, image,
  } = movie;

  const getMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? `${hours}ч` : '';
    const minutes = duration - hours * 60;
    const minutesStr = minutes > 0 ? `${minutes}м` : '';
    return hoursStr + minutesStr;
  };

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <li className="movies-card">
      <img
        className='movies-card__image opacity'
        src={image}
        alt={nameRU}
        onClick={handleClick}
      />
      <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
        <h3 className='movies-card__subtitle hide-part-text opacity'>{nameRU}</h3>
        <button className='movies-card__like-image opacity' /> || {children}
      </div>
      <p className='movies-card__duration'>
        {getMovieDuration(duration)}
      </p>
    </li>
  );
}

export default MoviesCard;
