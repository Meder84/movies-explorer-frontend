import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Promo from '../Promo/Promo';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
}

export default Main;
