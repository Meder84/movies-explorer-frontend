import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/consts';
import './MoviesCardList.css';

function MoviesCardList({
  savedMoviesPage, movies, onClickSaveDelete, selectedMovies,
  onClickImage, onDelete,
}) {
  const [currentCount, setCurrentCount] = useState(0);
  const [extraRow, setExtraRow] = useState(3);
  const [moviesToRender, setMoviesToRender] = useState([]);

  const getCount = (windowSize) => {
    if ( windowSize > TABLET_WIDTH ) {
      return { first: 12, extra: 3 };
    } else if (windowSize > MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
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

  function handleShowMoreItems() {
    return (
      <div className='show-more-items'>
        <button
          className='show-more-items__button opacity'
          onClick={renderMore}
        >
          Еще
        </button>
      </div>
    )
  }

  return (
    <section>
      <ul className='movies-card-list'>
        { moviesToRender.map((movieData) => (
          <MoviesCard
            key={movieData.id || movieData.movieId}
            movie={movieData}
            savedMoviesPage={savedMoviesPage}
            selectedMovies={selectedMovies}
            onClickSaveDelete={onClickSaveDelete}
            onDelete={onDelete}
            onClickImage={onClickImage}
          />
        ))}
      </ul>
      { currentCount < movies.length && handleShowMoreItems() }
    </section>
  )
}



export default MoviesCardList;
