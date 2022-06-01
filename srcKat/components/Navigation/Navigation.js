import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import IconHamburger from '../IconHamburger/IconHamburger';
import PopupMenu from '../PopupMenu/PopupMenu';
import Account from '../Account/Account';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({custumNavigationMovies, custumNavigationSavedMovies, customSubtitleAccount}) {
  const [showPopupMenu, setshowPopupMenu] = useState(false);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setshowPopupMenu (false);
      }
    }

    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [showPopupMenu])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setshowPopupMenu (false);
    }
  }

  function handleClick () {
    setshowPopupMenu (true);
  };

  function handleClose () {
    setshowPopupMenu (false);
  };

  return (
    <nav className='navigation'>
      <ul className='navigation__header-links'>
        <li className='navigation__header-link'>
          <NavLink to='/movies'
            activeClassName="menu__link-active"
            className={`
              navigation__header-link-movies
              opacity
              ${custumNavigationMovies}
            `}
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__header-link'>
          <NavLink to='/saved-movies'
            activeClassName="menu__link-active"
            className={`
              navigation__header-link-saved-movies
              opacity
              ${custumNavigationSavedMovies}
            `}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <NavLink to='/profile'
        activeClassName="menu__link-active"
        className='navigation__account-container'>
        <Account
          customSubtitleAccount={customSubtitleAccount}
        />
      </NavLink>
      <IconHamburger
        customIconHamburger='navigation__icon-hamburger'
        onClick={handleClick}
      />
      {
        showPopupMenu
        && <PopupMenu
            handleClose={handleClose}
            handleOverlay={handleOverlay}
           />
      }
    </nav>
  );
}

export default Navigation;

// <nav className="navigation">
// <Header
//   headerCustom={`navigation__header-block ${props.customNavigationHeaderBlock}`}
//   headerCustomLinks='navigation__header-conteiner'
// >
// <ul className='navigation__header-links'>
//   <li className='navigation__header-link'>
//     <Link to="/movies" className='navigation__header-link-movies opacity'>
//       Фильмы
//     </Link>
//   </li>
//   <li className='navigation__header-link'>
//     <Link to='/saved-movies' className='navigation__header-link-saved-movies opacity'>
//       Сохранённые фильмы
//     </Link>
//   </li>
// </ul>
// <Link to='/profile' className='navigation__account-container'>
//   <Account />
// </Link>
// <IconHamburger
//   customIconHamburger='navigation__icon-hamburger'
//   onClick={handleClick}
// />
// {showPopupMenu && <PopupMenu handleClose={handleClose}/>}
// </Header>
// </nav>
