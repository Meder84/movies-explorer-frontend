import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/bio-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe-anchor">
      <h1 className="about-me__title">Студент</h1>
      <div className="about-me__bio-wrapper">
        <div className="about-me__bio-information">
          <div className="about-me__bio-information-container">
            <h2 className="about-me__bio-title">Сергей</h2>
            <p className="about-me__bio-subtitle">Фронтенд-разработчик, 31 год</p>
            <p className="about-me__bio-text">
              Я родился и живу в Санкт-Петербурге, закончил факультет прикладной информатики в
              СПБГУАП. У меня есть жена и сын. Я люблю слушать аудиокниги, а ещё увлекаюсь
              различными активностями, из любимых пешие прогулки и гольф.
              Сейчас я уже закончил обучение на курсах Яндекс.Практикума и активно прокачиваюсь
              дальше, начал изучать TS и Sass. Разработываю концепцию пет-проекта, хочу сделать
              его на стеке Vue + (strapi/firebase/netlify). Сейчас читаю
              &quot;Выразительный JavaScript&quot;, Хавербеке.
            </p>
          </div>
          <div className="about-me__links-container">
            <a
              href="https://www.facebook.com/sergei.kompanietc/"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/DelightVLG"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img src={myPhoto} alt="me" className="about-me__photo" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
