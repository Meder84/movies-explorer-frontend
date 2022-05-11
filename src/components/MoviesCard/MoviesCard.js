import React from 'react';
import './MoviesCard.css';
import test from '../../images/test.jpg';

function MoviesCard(props) {
  return (
    <>
      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода Бег это свобода Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>

      <li className="movies-card">
        <img
          className='movies-card__image opacity'
          src={test}
          alt='test'
        />
        <div className={`movies-card__description-container ${props.customMoviesCardDescriptionContainer}`}>
          <h3 className='movies-card__subtitle hide-part-text opacity'>Бег это свобода</h3>
          <div className={`movies-card__like-image opacity ${props.customMoviesCardLikeImage}`} />
        </div>
        <p className='movies-card__duration'>
          1ч 44м
        </p>
      </li>
    </>
  );
}

export default MoviesCard;
