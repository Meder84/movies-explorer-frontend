import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import SignInBtn from '../ui/SignInBtn/SignInBtn';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';
import BurgerMenuBtn from '../ui/BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MainLogoLink from '../ui/MainLogoLink/MainLogoLink';
import './Header.css';

function Header({ isLoggedIn }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerMenuClick = () => setIsOpen(!isOpen);

  return (
    <header className="header">

      <MainLogoLink />

      {isLoggedIn && isMobile && <BurgerMenuBtn handleClick={handleBurgerMenuClick} />}

      {!isLoggedIn && (
        <div className="header__nav-wrapper header__nav-wrapper_type_unauth">
          <Navigation isLoggedIn={isLoggedIn} />
          <SignInBtn />
        </div>
      )}

      {!isMobile && isLoggedIn && (
        <div className="header__nav-wrapper header__nav-wrapper_type_auth">
          <Navigation isLoggedIn={isLoggedIn} />
          <ProfileBtn />
        </div>
      )}

      {isLoggedIn && <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick} />}

    </header>
  );
}

export default Header;
