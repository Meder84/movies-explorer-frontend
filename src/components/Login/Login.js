import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForAuth from '../FooterForAuth/FooterForAuth';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <header className='login__header'>
        <Header
          headerCustom='login__header__elem'
          headerCustomLinks='login__header__links'
        />
      </header>
      <main className='login__main'>
        <Form
          customForm='login__form'
          name='login'
          title='Рады видеть!'
        >
          <Input
            customInputContainer='login__input__container'
            customInputItem='login__input__item'
            type="email"
            id="email" name="email"
            maxLength="30" minLength="2"
            placeholder="E-mail" required
            errorId="email-error"
          >
            E-mail
          </Input>

          <Input
            customInputContainer='login__input__container'
            type="password"
            id="password" name="password"
            maxLength="30" minLength="2"
            placeholder="Пароль" required
            errorId="password-error"
            errorText=''
          >
            Пароль
          </Input>
        </Form>
      </main>
      <footer className='login__footer'>
        <FooterForAuth
          customFooterForAuth='login__footer__container'
          customFooterForAuthButton='login__footer__button'
          buttonType='submit'
          buttonText='Войти'
          customFooterForAuthTextContainer='login__footer__text-container'
        >
          <p className='login__footer__text'>Ещё не зарегистрированы?</p>
            <button
              className='login__footer__button-login opacity'
              type='button'
            >
              Регистрация
            </button>
        </FooterForAuth>
      </footer>
    </div>
  );
}

export default Login;
