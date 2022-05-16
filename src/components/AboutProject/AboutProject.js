import React from 'react';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './AboutProject.css';

function AboutProject () {
  return (
      <section
        className='about-project'
        id='about-project'
      >
        <HeaderBlock>О проекте</HeaderBlock>
        <main className='about-project__main'>
          <div className='about-project__info-text-elements'>
            <h2 className='about-project__title'>
              Дипломный проект включал 5 этапов
            </h2>
            <h2 className='about-project__title'>
              На выполнение диплома ушло 5 недель
            </h2>
            <p className='about-project__text about-project__text_displacement'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
              чтобы успешно защититься.
            </p>
          </div>

          <div className='about-project__info-button-elements'>
            <h3 className='about-project__studying-time about-project__studying-time_green'>1 неделя</h3>
            <h3 className='about-project__studying-time about-project__studying-time_grey'>4 недели</h3>
            <h3 className='about-project__speciality'>Back-end</h3>
            <h3 className='about-project__speciality'>Front-end</h3>
          </div>
        </main>
      </section>
  );
}
export default AboutProject;
