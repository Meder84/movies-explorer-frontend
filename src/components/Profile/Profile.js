import React from 'react';
import Navigation from '../Navigation/Navigation';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForAuth from '../FooterForAuth/FooterForAuth';
import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
      <Navigation
        customNavigationHeaderBlock='profile__header'
      />
      <main className='profile__main'>
        <Form
          customForm='profile__form'
          name='profile'
          title='Привет, Медер!'
        >
          <Input
            customInputContainer='profile__input-container'
            customInputItem='profile__input-item'
            type="text"
            id="name" name="name"
            maxLength="30" minLength="2"
            placeholder="Имя" required
            errorId="name-error"
          >
            Имя
          </Input>

          <Input
            customInputContainer='profile__input-container profile__input-container_border-none'
            customInputItem='profile__input-item'
            type="email"
            id="email" name="email"
            maxLength="30" minLength="2"
            placeholder="E-mail" required
            errorId="email-error"
          >
            E-mail
          </Input>
        </Form>
      </main>
      <footer className='profile__footer'>
        <FooterForAuth
          customFooterForAuth='profile__footer-container'
          customFooterForAuthButton='profile__footer-button'
          buttonType='submit'
          buttonText='Редактировать'
        >
          <button
            className='profile__footer-button-logout'
            type='button'
          >
            Выйти из аккаунта
          </button>
        </FooterForAuth>
      </footer>
    </div>
  );
}

export default Profile;
