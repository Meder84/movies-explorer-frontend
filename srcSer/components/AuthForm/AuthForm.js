import React, { useEffect } from 'react';
import SubmitBtn from '../ui/SubmitBtn/SubmitBtn';
import './AuthForm.css';

function AuthForm({
  FormTypeLogin, onSubmit, formData, isSignUpError, isSignInError,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = formData;

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form
      className="auth-form"
      onSubmit={onSubmit}
      noValidate
    >

      {!FormTypeLogin && (
        <label className="auth-form__label" htmlFor="name">
          Имя
          <input
            className={`auth-form__input ${errors.name && 'auth-form__input_has_error'}`}
            required
            minLength="2"
            maxLength="30"
            name="name"
            type="text"
            placeholder="Имя"
            onChange={handleChange}
            value={values.name || ''}
            autoComplete="off"
          />
          <span className="auth-form__error">{errors.name}</span>
        </label>
      )}

      <label className="auth-form__label" htmlFor="email">
        Почта
        <input
          className={`auth-form__input ${errors.email && 'auth-form__input_has_error'}`}
          required
          name="email"
          type="email"
          placeholder="Почта"
          onChange={handleChange}
          value={values.email || ''}
          autoComplete="off"
        />
      </label>
      <span className="auth-form__error">{errors.email}</span>

      <label className="auth-form__label" htmlFor="password">
        Пароль
        <input
          className={`auth-form__input ${errors.password && 'auth-form__input_has_error'}`}
          required
          name="password"
          type="password"
          minLength="8"
          placeholder="Пароль"
          onChange={handleChange}
          value={values.password || ''}
          autoComplete="off"
        />
        <span className="auth-form__error">{errors.password}</span>

      </label>
      <div className={FormTypeLogin
        ? 'auth-form__submit-wrapper auth-form__submit-wrapper_type_signin'
        : 'auth-form__submit-wrapper auth-form__submit-wrapper_type_signup'}
      >
        {isSignUpError && <span className="auth-form__error">Ошибка при регистрации</span>}
        {isSignInError && <span className="auth-form__error">Вы не авторизированы</span>}
        <SubmitBtn isDisabled={!isValid} label={FormTypeLogin ? 'Войти' : 'Зарегистрироваться'} />
      </div>
    </form>
  );
}

export default AuthForm;
