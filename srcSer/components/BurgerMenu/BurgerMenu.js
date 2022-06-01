import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';
import './BurgerMenu.css';

function BurgerMenu({ isOpen, closeHandler }) {
  return (
    <div className={`burger-menu ${isOpen ? 'burger-menu_is-open' : ''}`}>
      <button
        className="burger-menu__close-btn"
        onClick={closeHandler}
        type="button"
        tabIndex={0}
      />

      <div className="burger-menu__link-list">
        <NavLink
          exact
          to="/"
          className="burger-menu__link"
          activeClassName="burger-menu__link_is-active"
        >
          Главная
        </NavLink>

        <NavLink
          to="/movies"
          className="burger-menu__link"
          activeClassName="burger-menu__link_is-active"
        >
          Фильмы
        </NavLink>

        <NavLink
          to="/saved-movies"
          className="burger-menu__link"
          activeClassName="burger-menu__link_is-active"
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <ProfileBtn />
    </div>
  );
}

export default BurgerMenu;
