import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Navigation.css';
import iconAccount from '../../images/iconAccount.svg';
import IconHamburger from '../IconHamburger/IconHamburger';

function Navigation() {
  return (
    <nav className="navigation">
     <Header headerCustomLinks='navigation__header-conteiner'>
        <div className='navigation__header-links'>
          <Link to='/movies' className='navigation__header-link-movies opacity'>
            Фильмы
          </Link>
          <Link to='/saved-movies' className='navigation__header-link-saved-movies opacity'>
            Сохранённые фильмы
          </Link>
        </div>
        <Link to='/profile' className='navigation__account-container opacity'>
          <h3 className='navigation__subtitle-account'>Аккаунт</h3>
          <div className='navigation__icon-account'> </div>
        </Link>
        <IconHamburger customIconHamburger='navigation__icon-hamburger'/>
      </Header>
    </nav>
  );
}

export default Navigation;
