import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/consts';
import './MoviesCardList.css';

function MoviesCardList(props, {
  savedMovies, movies, onBookmarkClick, isMovieAdded,
}) {
  const [currentCount, setCurrentCount] = useState(0);
  const [extraRow, setExtraRow] = useState(3);
  const [moviesToRender, setMoviesToRender] = useState([]);

  const getCount = (windowSize) => {
    if (windowSize >= DESKTOP_WIDTH) {
      return { first: 12, extra: 3 };
    } if (windowSize > MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
      return { first: 8, extra: 2 };
    }
    return { first: 5, extra: 2 };
  };

  const renderExtraRow = () => {
    const count = Math.min(movies.length, currentCount + extraRow);
    const extraMovies = movies.slice(currentCount, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setCurrentCount(count);
  };

  const resizeHandler = () => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize));
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize).extra);
    const count = Math.min(movies.length, getCount(windowSize).first);
    setMoviesToRender(movies.slice(0, count));
    setCurrentCount(count);
  }, [movies]);

  const renderMore = () => renderExtraRow();


  return (
    <>
      <ul className={`movies-card-list ${props.customMoviesCardList}`}>
        { moviesToRender.map((movieData) => (
          <MoviesCard
            customMoviesCardDescriptionContainer={props.customMoviesCardDescriptionContainer}
            // customMoviesCardLikeImage={props.customMoviesCardLikeImage}
            key={movieData.movieId}
            movie={movieData}
            savedMovies={savedMovies}
            isMovieAdded={isMovieAdded}
            onBookmarkClick={onBookmarkClick}
          />
        ))}
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
