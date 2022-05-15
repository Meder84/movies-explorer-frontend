import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
  return(
    <header className={`header ${props.headerCustom}`}>
      <Link
        to='/'
        className="logo header__logo opacity"
      >
      </Link>
        <div className={`header__links ${props.headerCustomLinks}`}>
          {props.children}
        </div>
    </header>
  );
};

export default Header;
