import React from 'react';
import HeaderBlock from '../HeaderBlock/HeaderBlock';

import './Techs.css';

function Techs () {
  return (
    <section className='techs'>
      <HeaderBlock headerBlockCustomClass='techs__header'>Технологии</HeaderBlock>
      <main className='techs__main'>
        <h2 className='techs__title'>7 технологий</h2>
        <h3 className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
        <ul className='techs__list'>
          <li className='techs__elem'>HTML</li>
          <li className='techs__elem'>CSS</li>
          <li className='techs__elem'>JS</li>
          <li className='techs__elem'>React</li>
          <li className='techs__elem'>Git</li>
          <li className='techs__elem'>Express.js</li>
          <li className='techs__elem'>mongoDB</li>
        </ul>
      </main>
    </section>
  );
}
export default Techs;
