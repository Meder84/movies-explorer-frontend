import React, { useState } from 'react'
import Header from '../Header/Header';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForAuth from '../FooterForAuth/FooterForAuth';
import './Register.css';
import { Link } from 'react-router-dom';


function Register(props) {
  const [state, setState] = useState({
    password: '',
    email: '',
  })

  function handleChange (e) {
    const {name, value} = e.target;
    setState(old => ({
      ...old,
      [name]: value,
    }));
  };

  const formReset = () => {
    setState({password: '', email: '',});
  }

  function handleSubmit (e) {
    e.preventDefault();
    const {password, email} = state;
    if (!password || !email ) return;

    props.handleRegister(password, email, formReset);
  }

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
            <Link to={'/signin'}>
              <button
                className='register__footer__button-login opacity'
                type='button'
              >
                Войти
              </button>
            </Link>
        </FooterForAuth>
      </footer>
    </div>
  );
}

export default Register;
