import React from 'react';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import { Link } from 'react-router-dom';
import imageDiploma from '../../images/imageDiploma.jpg'

import './AboutMe.css';

function AboutMe () {
  return (
    <section className='about-me'>
      <HeaderBlock>Студент</HeaderBlock>
      <main className='about-me__main'>
        <div className='about-me__main-container'>
          <div className='about-me__main-description'>
            <h2 className='about-me__title'>
              Медер
            </h2>
            <h3 className='about-me__subtitle'>
              Фронтенд-разработчик, 37 лет
            </h3>
            <p className='about-me__text'>
              Я родился в Кыргызской ССР, живу в Москве, закончил Факультет кибернетики и информационных технологий ОшТУ,
              по специальности, "Прикладная математика и информатика". Люблю заниматься программированием, чтением научных литератур,
              волейболом (1-е место в спартакиаде 2020 по Истринскому округу, Московской обл.), еще мне нравиться шахматы, футбол и пинг-понг.
              Прошел курс Яндекс.Практикума по веб-разработке. Ищу работу front-end разработчика.
            </p>
          </div>
          <img
            className='about-me__image'
            src={imageDiploma}
            alt='Фотография студента'
          />
        </div>
        <ul className='social__list'>
          <li className='social__item'>
            <a className='social__link'
              href=''
              target='_blank' rel=''
            >
              Facebook
            </a>
          </li>
          <li className='social__item'>
            <a className=''
              href=''
              target='_blank' rel=''
            >
              Github
            </a>
          </li>
        </ul>
      </main>
    </section>
  );
}
export default AboutMe;
