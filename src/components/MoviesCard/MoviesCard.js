import React from 'react';
import './MoviesCard.css';

function MoviesCard({
  savedMovies, movie, onBookmarkClick, isMovieAdded,
  customMoviesCardDescriptionContainer
}) {
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

  const isAdded = isMovieAdded(movie);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    onBookmarkClick(movie, !isAdded);
  };

  const removeHandler = () => {
    onBookmarkClick(movie, false);
  };

  return (
    <li className="movies-card">
      <img
        className='movies-card__image opacity'
        src={image}
        alt={nameRU}
      />
      <div className={`movies-card__description-container ${customMoviesCardDescriptionContainer}`}>
        <h3 className='movies-card__subtitle hide-part-text opacity'>{nameRU}</h3>
        {
          !savedMovies
          ? <button
              className={!isAdded
                ? 'movies-card__like-image opacity'
                : 'movies-card__like-image_red opacity'
              }
              onClick={handleBookmarkClick}
              type='button'
            />
          : <button
              className='saved-movies__delete-image opacity'
              onClick={removeHandler}
            />
        }
      </div>
      <p className='movies-card__duration'>
        {getMovieDuration(duration)}
      </p>
    </li>
  );
}

export default MoviesCard;
