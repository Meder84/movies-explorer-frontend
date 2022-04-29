import React from "react";
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
  return(
    <header className="header">
      <img
        className="logo header__logo opacity"
        src={logo}
        alt="Текст Mesto."
      />
      <div className="header__links">
        {props.children}
      </div>
    </header>
  );
};

export default Header;
