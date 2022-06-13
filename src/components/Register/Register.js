import React, { useState, useEffect } from 'react'
import Header from '../Header/Header';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForm from '../FooterForm/FooterForm';
import useFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';
import { Link } from 'react-router-dom';
import './Register.css';


function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [message, setmessage] = useState('');

  useEffect(() => {
    props.resetMessage();
  }, [values]);

  useEffect(() => {
    setmessage(props.message);
  }, [props.message]);

  function formReset () {
    resetForm({ name: '', email: '', password: '' });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleRegister(values.name, values.email, values.password,  formReset);
  };

  return (
    <div className="register">
      <Header
        headerCustom='register__header'
        headerCustomLinks='register__header__links'
      />
      <Form
        customForm='register__form'
        name='register'
        title='Добро пожаловать!'
        onSubmit={handleSubmit}
      >
        <fieldset className='register__fieldset-main'>
          <Input
            type="text"
            id="name" name="name"
            pattern="^[A-Za-z]([A-Za-z]| |-){1,28}[A-Za-z]$"
            maxLength="30" minLength="2"
            placeholder="Имя"
            required
            errorId="name-error"
            isError={errors.name}
            errorText={errors.name}
            onChange={handleChange}
            value={values.name || ''}
          >
            Имя
          </Input>

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
          customFooterForm='register__footer'
          buttonText='Зарегистрироваться'
          customFooterFormTextContainer='register__footer__text-container'
          disabled={!isValid}
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
        </FooterForm>
      </Form>
    </div>
  );
}

export default Register;
