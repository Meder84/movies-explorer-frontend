import React from 'react';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import imageDiploma from '../../images/imageDiploma.jpg';
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
              Я родился в Кыргызской ССР, живу в Москве, закончил Факультет кибернетики и информационных технологий
              в Ошском Технологическом Университете, по специальности, "Прикладная математика и информатика".
              Люблю заниматься программированием, чтением научных литератур,
              волейболом (1-е место в спартакиаде 2020 по Истринскому округу, Московской обл.),
              еще мне нравиться играть в шахматы, в футбол и в пинг-понг.
              Прошел курс Яндекс.Практикума по веб-разработке. Ищу работу front-end разработчика.
            </p>
          </div>
          <ul className='social__list'>
            <li className='social__elem'>
              <a className='social__link'
                href='https://vk.com/mr_medi'
                target='_blank' rel='noreferrer noopener'
              >
              Vk
              </a>
            </li>
            <li className='social__elem'>
              <a className='social__link'
                href='https://github.com/Meder84'
                target='_blank' rel='noreferrer noopener'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
            className='about-me__image'
            src={imageDiploma}
            alt='Фотография студента'
          />
      </main>
    </section>
  );
}
export default AboutMe;
