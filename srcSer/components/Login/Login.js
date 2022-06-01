import React from 'react';
import { Link } from 'react-router-dom';
import MainLogoLink from '../ui/MainLogoLink/MainLogoLink';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Login.css';

function Login({ signInHandler, isSignInError }) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;

  const submitHandler = (e) => {
    e.preventDefault();
    signInHandler(email, password);
    formWithValidation.resetForm();
  };

  return (
    <div className="login">
      <MainLogoLink />
      <h2 className="login__title">Рады видеть!</h2>
      <AuthForm
        FormTypeLogin
        formData={formWithValidation}
        onSubmit={submitHandler}
        isSignInError={isSignInError}
      />
      <p className="login__footer">
        Ещё не зарегистрированы?
        <Link className="login__link" to="/signup">Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;
