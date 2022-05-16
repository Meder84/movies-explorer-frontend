import React from "react";
import iconHamburger from '../../images/iconHamburger.svg';
import './IconHamburger.css';

function IconHamburger(props) {
  return (
    <img
     className={`iconHamburger opacity ${props.customIconHamburger}`}
     src={iconHamburger}
     alt='Иконка гамбургер меню'
     onClick={props.onClick}
    />
  )
}

export default IconHamburger;
