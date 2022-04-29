import React from 'react';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import { Link } from 'react-router-dom';

import './AboutMe.css';

function AboutMe () {
  return (
    <section className='about-me'>
      <HeaderBlock>Студент</HeaderBlock>
      <main className='AboutMe__main'>
        <div className='promo__main-container'>
          <div className='promo__main-description'>
            <h1 className='promo__title'>
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <h4 className='promo__subtitle'>
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </h4>
          </div>
          <Link>
            <button
              type='button'
              className='promo__info-button opacity'
            >
              Узнать больше
            </button>
          </Link>
        </div>
          <img
            className='promo__main-logo opacity'
            src=''
            alt='Тектовая картинка, вид земли из космоса'
          />
        </main>
    </section>
  );
}
export default AboutMe;
