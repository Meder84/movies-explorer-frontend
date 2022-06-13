import React from 'react';

import './Portfolio.css';

const Portfolio = () => (
  <main className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>

    <ul className="portfolio__list">
      <li className="portfolio__elem">
        <h4 className="portfolio__subtitle">
          Статичный сайт
        </h4>
        <a
          className="portfolio__link"
          href="https://meder84.github.io/how-to-learn/"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>

      <li className="portfolio__elem">
        <h4 className="portfolio__subtitle">
          Адаптивный сайт
        </h4>
        <a
          className="portfolio__link"
          href="https://meder84.github.io/russian-travel/"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>

      <li className="portfolio__elem">
        <h4 className="portfolio__subtitle">
          Одностраничное приложение
        </h4>
        <a
          className="portfolio__link"
          href="https://meder84.github.io/mesto/index.html"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>
    </ul>
  </main>
);

export default Portfolio;

