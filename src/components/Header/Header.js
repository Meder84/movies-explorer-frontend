import React from "react";
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
  return(
    <header className={`header ${props.headerCustom}`}>
      <img
        className="logo header__logo opacity"
        src={logo}
        alt="логотип"
      />
      <div className={`header__links ${props.headerCustomLinks}`}>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
