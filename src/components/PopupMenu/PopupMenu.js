import React from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';

import './PopupMenu.css';

function PopupMenu() {

  return (
    <div className="popup-menu">
      <button className="popup-menu__btn-close opacity" />
      <div className="popup-menu__container">
        <div className='popup-menu__links' >
          <NavLink exact to="/"
            activeClassName="popup-menu__link-active"
            className="popup-menu__link opacity"
          >
            Главная
          </NavLink>

          <NavLink to="/movies"
            activeClassName="popup-menu__link-active"
            className="popup-menu__link opacity"
          >
            Фильмы
          </NavLink>

          <NavLink to="/saved-movies"
            activeClassName="popup-menu__link-active"
            className="popup-menu__link opacity"
          >
            Сохранённые фильмы
          </NavLink>
        </div>


        <NavLink to="/profile"
          activeClassName="popup-menu__link-active"
          className="popup-menu__link-profile opacity"
        >
          <Account />
        </NavLink>

      </div>
    </div>
  );
}

export default PopupMenu;
