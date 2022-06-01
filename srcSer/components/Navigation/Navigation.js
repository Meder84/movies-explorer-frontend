import React from 'react';
import {
  NavLink, Link,
} from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoggedIn }) {
  return (
    <nav className="navigation">

      {!isLoggedIn && (
        <Link
          to="/signup"
          className="navigation__link"
        >
          Регистрация
        </Link>
      )}

      {isLoggedIn && (
        <>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_is-active"
          >
            Фильмы
          </NavLink>

          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_is-active"
          >
            Сохранённые фильмы
          </NavLink>
        </>
      )}

    </nav>
  );
}

export default Navigation;
