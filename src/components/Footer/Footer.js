import React from 'react';
import './Footer.css';

function Footer () {
  return (
    <footer className='footer'>
      <main className='footer__main'>
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
      </main>
      <footer className="footer__footer">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-elem opacity"
              href="https://praktikum.yandex.ru"
              target="_blank" rel="noreferrer noopener"
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__link">
            <a className="footer__link-elem opacity"
              href="https://github.com"
              target="_blank" rel="noreferrer noopener"
            >
              Github
            </a>
          </li>

          <li className="footer__link">
            <a className="footer__link-elem opacity"
              href="https://www.facebook.com"
              target="_blank" rel="noreferrer noopener"
            >
              Facebook
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
}


export default Footer;
