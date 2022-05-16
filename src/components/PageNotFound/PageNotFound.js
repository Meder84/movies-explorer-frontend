import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <div className="page-not-found">
      <div className="page-not-found__info-container">
        <h2 className="page-not-found__title">
          404
        </h2>
        <p className="page-not-found__text">
          Страница не найдена
        </p>
      </div>
      <Link className="page-not-found__button opacity" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;
