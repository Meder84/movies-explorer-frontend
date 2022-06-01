import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMoreBtn from '../ui/LoadMoreBtn/LoadMoreBtn';
import './MoviesCardList.css';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/constants';

function MoviesCardList({
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
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {moviesToRender.map((movieData) => (
          <li className="movies-card-list__item" key={movieData.id}>
            <MoviesCard
              movie={movieData}
              savedMovies={savedMovies}
              isMovieAdded={isMovieAdded}
              onBookmarkClick={onBookmarkClick}
            />
          </li>
        ))}
      </ul>
      { currentCount < movies.length && <LoadMoreBtn onClick={renderMore} />}
    </section>
  );
}

export default MoviesCardList;
