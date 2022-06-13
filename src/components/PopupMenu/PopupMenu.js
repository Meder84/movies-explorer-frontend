import React from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';

import './PopupMenu.css';

function PopupMenu(props) {

  return (
    <div
      className="popup-menu"
      onClick={props.handleOverlay}
    >
      <button
        className="popup-menu__btn-close opacity"
        onClick={props.handleClose}
      />
      <div className="popup-menu__container">
        <div className='popup-menu__links' >
          <NavLink exact to="/"
            activeClassName="menu__link-active"
            className="popup-menu__link opacity"
          >
            Главная
          </NavLink>

          <NavLink to="/movies"
            activeClassName="menu__link-active"
            className="popup-menu__link opacity"
          >
            Фильмы
          </NavLink>

          <NavLink to="/saved-movies"
            activeClassName="menu__link-active"
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
