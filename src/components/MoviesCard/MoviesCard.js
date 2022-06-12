import React from 'react';
import './MoviesCard.css';

function MoviesCard({
  savedMoviesPage, movie, onClickSaveDelete, selectedMovies,
  customMoviesCardDescriptionContainer, onClickImage, onDelete,
}) {
  const {
    nameRU, duration, image,
  } = movie;

  const getMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? `${hours}ч` : '';
    const minutes = duration - hours * 60;
    const minutesStr = minutes > 0 ? `${minutes}м` : '';
    return hoursStr + minutesStr;
  };

  const select = selectedMovies(movie);

  const handleClickSave = (e) => {
    e.preventDefault();
    onClickSaveDelete(movie, !select);
  };

  const handleClickDelete = () => {
    onDelete(movie, false);
  };

  const handleClickImage = () => {
    onClickImage(movie);
  };

  return (
    <li className="movies-card">
      <img
        className='movies-card__image opacity'
        src={image}
        alt={nameRU}
        onClick={handleClickImage}
      />
      <div className={`movies-card__description-container ${customMoviesCardDescriptionContainer}`}>
        <h3 className='movies-card__subtitle hide-part-text opacity'>{nameRU}</h3>
        {
          !savedMoviesPage
          ? <button
              className={
                select
                ? 'movies-card__like-image_red opacity'
                : 'movies-card__like-image opacity'
              }
              onClick={handleClickSave}
              type='button'
            />
          : <button
              className='movies-card__delete-image opacity'
              onClick={handleClickDelete}
              type='button'
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
