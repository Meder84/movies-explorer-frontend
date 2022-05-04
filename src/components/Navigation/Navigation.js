import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Navigation.css';
import iconAccount from '../../images/iconAccount.svg';

function Navigation() {
  return (
    <nav className="navigation">
     <Header>
        <div className='navigation__header-conteiner'>
          <div className='navigation__header-links'>
            <Link to='/movies' className='navigation__header-link-movies'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='navigation__header-link-saved-movies'>
              Сохранённые фильмы
            </Link>
          </div>
          <Link to='/profile' className='navigation__account-container'>
            <h3 className='navigation__subtitle-account'>Аккаунт</h3>
            <div className='navigation__icon-account'> </div>
          </Link>
        </div>
      </Header>
    </nav>
  );
}

export default Navigation;
