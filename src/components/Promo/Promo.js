import React, { useContext } from 'react';
import Header from '../Header/Header';
import promoLogo from '../../images/promoLogo.png';
// import NavTab from '../NavTab/NavTab';
// import Navigation from '../Navigation/Navigation';

// import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  // const currentUser = useContext(CurrentUserContext);

  return (
    <section className='promo'>
      <Header>
        <Link to='/register' className='promo__header-regis opacity'>Регистрация</Link>
        <Link to='/login' className='promo__header-login'>
          <button
            type='submit'
            className='promo__sign-button opacity'
          >
            Войти
          </button>
        </Link>
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
          <Link>
            <button
              type='button'
              className='promo__info-button opacity'
            >
              Узнать больше
            </button>
          </Link>
        </div>
        <Link>
          <img
            className='promo__main-logo opacity'
            src={promoLogo}
            alt='Тектовая картинка, вид земли из космоса'
          />
        </Link>
      </main>
    </section>
  );
}

export default Promo;
