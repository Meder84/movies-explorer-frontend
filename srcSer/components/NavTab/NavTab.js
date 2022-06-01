import React from 'react';
// import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <a href="/#aboutProject-anchor" className="nav-tab__link">
            О проекте
          </a>
        </li>
        <li className="nav-tab__list-item">
          <a href="/#tech-anchor" className="nav-tab__link">
            Технологии
          </a>
        </li>
        <li className="nav-tab__list-item">
          <a href="/#aboutMe-anchor" className="nav-tab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
