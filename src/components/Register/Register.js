import React from 'react'
import Header from '../Header/Header';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForAuth from '../FooterForAuth/FooterForAuth';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <header className='register__header'>
        <Header
          headerCustom='register__header__elem'
          headerCustomLinks='register__header__links'
        />
      </header>
      <main className='register__main'>
        <Form
          customForm='register__form'
          name='register'
          title='Добро пожаловать!'
        >
          <Input
            type="text"
            id="name" name="name"
            maxLength="30" minLength="2"
            placeholder="Имя" required
            errorId="name-error"
          >
            Имя
          </Input>

          <Input
            customInputContainer='register__input__container_error'
            type="email"
            id="email" name="email"
            maxLength="30" minLength="2"
            placeholder="E-mail" required
            errorId="email-error"
          >
            E-mail
          </Input>

          <Input
            customInputItem='register__input__item_error'
            type="password"
            id="password" name="password"
            maxLength="30" minLength="2"
            placeholder="Пароль" required
            errorId="password-error"
            errorText='Что-то пошло не так...'
          >
            Пароль
          </Input>
        </Form>
      </main>
      <footer className='register__footer'>
        <FooterForAuth
          customFooterForAuth='register__footer__container'
          customFooterForAuthButton='register__footer__button'
          buttonType='submit'
          buttonText='Зарегистрироваться'
          customFooterForAuthTextContainer='register__footer__text-container'
        >
          <p className='register__footer__text'>Уже зарегистрированы?</p>
            <button
              className='register__footer__button-login opacity'
              type='button'
            >
              Войти
            </button>
        </FooterForAuth>
      </footer>
    </div>
  );
}

export default Register;
