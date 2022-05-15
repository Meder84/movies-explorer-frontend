import React from 'react';
import Header from '../Header/Header';
import promoLogo from '../../images/promoLogo.png';
import { Link, animateScroll as scroll } from "react-scroll";
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <Header>
        <NavTab ></NavTab>
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
          >
            <button
              type='button'
              className='promo__info-button opacity'
            >
              Узнать больше
            </button>
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
