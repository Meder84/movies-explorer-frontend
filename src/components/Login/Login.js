import React, { useState, useEffect } from 'react'
import Header from '../Header/Header';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForm from '../FooterForm/FooterForm';
import useFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [message, setmessage] = useState('');

  useEffect(() => {
    props.resetMessage();
  }, [values]);

  useEffect(() => {
    setmessage(props.message);
  }, [props.message]);

  function formReset () {
    resetForm({ email: '', password: '' });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogin(values.email, values.password,  formReset);
  };

  return (
    <div className="login">
      <Header
        headerCustom='login__header'
        headerCustomLinks='login__header__links'
      />
      <Form
        customForm='login__form'
        name='login'
        title='Рады видеть!'
        onSubmit={handleSubmit}
      >
        <fieldset className='login__fieldset-main'>
          <Input
            type="email"
            id="email" name="email"
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            maxLength="30" minLength="2"
            placeholder="E-mail"
            required
            errorId="email-error"
            isError={errors.email}
            errorText={errors.email}
            onChange={handleChange}
            value={values.email || ''}
          >
            E-mail
          </Input>

          <Input
            type="password"
            id="password" name="password"
            maxLength="20" minLength="8"
            placeholder="Пароль"
            required
            errorId="password-error"
            isError={errors.password || message}
            errorText={errors.password || message}
            onChange={handleChange}
            value={values.password || ''}
          >
            Пароль
          </Input>
        </fieldset>

        <FooterForm
          customFooterForm='login__footer'
          buttonText='Войти'
          customFooterFormTextContainer='login__footer__text-container'
          disabled={!isValid}
        >
          <p className='login__footer__text'>Ещё не зарегистрированы?</p>
          <Link to={'/signup'}>
            <button
              className='login__footer__button-login opacity'
              type='button'
            >
              Регистрация
            </button>
          </Link>
        </FooterForm>
      </Form>
    </div>
  );
}

export default Login;
