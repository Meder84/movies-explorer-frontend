import React from "react";
<<<<<<< HEAD
import logo from '../images/logo.svg';
=======
import logo from '../../images/logo.svg';
import './Header';
>>>>>>> 98d3717f7563c89008295a42c46ddac1013e91de

function Header(props) {
  return(
    <header className="header">
      <img
        className="logo header__logo opacity"
        src={logo}
<<<<<<< HEAD
        alt="Текст Mesto."
=======
        alt="логотип"
>>>>>>> 98d3717f7563c89008295a42c46ddac1013e91de
      />
      <div>
        {props.children}
      </div>
    </header>
  )
}

export default Header;
