import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => (
  <nav className="nav-tab">
    <Link to='/signup' className='nav-tab__signup opacity'>
      Регистрация
    </Link>
    <Link to='/signin' className='nav-tab__signin opacity'>
      Войти
    </Link>
  </nav>
);

export default NavTab;
