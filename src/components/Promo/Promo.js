import React from 'react'
import { Link } from 'react-router-dom';
import './Promo.css';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

function Promo() {
  return (
    <>
      <Header>
        <Link to="/signup" className="header__link opacity">Регистрация</Link>
      </Header>
    <div className="promo">
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default Promo;
