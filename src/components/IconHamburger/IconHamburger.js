import React from "react";
import iconHamburger from '../../images/iconHamburger.svg';
import './IconHamburger.css';

function IconHamburger(props) {
  return (
    <img
     className={`iconHamburger ${props.customIconHamburger}`}
     src={iconHamburger}
     alt='Иконка гамбургер меню'
    />
  )
}

export default IconHamburger;
