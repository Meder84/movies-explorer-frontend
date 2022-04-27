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
    <section className="promo promo__block">
      <Header>
        <Link className='promo__header-regis'>Регистрация</Link>
        <Link className='promo__header-login'>
          <button
            type="submit"
            className="promo__sign-button opacity"
          >
            Войти
          </button>
        </Link>
        {/* {currentUser.email ? <Navigation theme="blue"/> : <NavTab />} */}
        {/* <Navigation theme="blue"/>
         <NavTab /> */}
      </Header>

      <div className="promo__block promo__container">
        <h1 className="promo__block promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <Link className="promo__block promo__image">
          <img
            className="promo__logo opacity"
            src={promoLogo}
            alt="Текст Mesto."
          />
        </Link>
      </div>
    </section>
  );
}

export default Promo;
