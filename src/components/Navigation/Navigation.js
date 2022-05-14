import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import IconHamburger from '../IconHamburger/IconHamburger';
import PopupMenu from '../PopupMenu/PopupMenu';
import Account from '../Account/Account';
import './Navigation.css';

function Navigation(props) {
  return (
    <nav className="navigation">
     <Header
       headerCustom={`navigation__header-block ${props.customNavigationHeaderBlock}`}
       headerCustomLinks='navigation__header-conteiner'
      >
        <div className='navigation__header-links'>
          <Link to='/movies' className='navigation__header-link-movies opacity'>
            Фильмы
          </Link>
          <Link to='/saved-movies' className='navigation__header-link-saved-movies opacity'>
            Сохранённые фильмы
          </Link>
        </div>
        <Link to='/profile' className='navigation__account-container'>
          <Account />
        </Link>
        <IconHamburger customIconHamburger='navigation__icon-hamburger'/>
        <PopupMenu />
      </Header>
    </nav>
  );
}

export default Navigation;
