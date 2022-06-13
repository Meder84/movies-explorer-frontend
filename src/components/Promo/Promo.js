import React, { useContext } from 'react';
import Header from '../Header/Header';
import promoLogo from '../../images/promoLogo.png';
import { Link, animateScroll as scroll } from "react-scroll";
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Promo.css';

function Promo() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className='promo'>
      <Header headerCustom='promo__header'>
        {currentUser.email
          ? <Navigation
              custumNavigationMovies='propmo__nav__movies'
              custumNavigationSavedMovies='propmo__nav__saved-movies'
              customSubtitleAccount='promo__subtitle__account'
            />
          : <NavTab />
        }
      </Header>
      <main className='promo__main-block'>
        <div className='promo__main-container'>
          <div className='promo__main-description'>
            <h1 className='promo__title'>
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <h4 className='promo__subtitle'>
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </h4>
          </div>

          <Link
            to='about-project'
            className='promo__info-button opacity'
          >
            Узнать больше
          </Link>
        </div>
        <img
          className='promo__main-logo'
          src={promoLogo}
          alt='Тектовая картинка, вид земли из космоса'
        />
      </main>
    </section>
  );
}

export default Promo;
