import React, { useState, useEffect, useContext } from 'react'
import Navigation from '../Navigation/Navigation';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FooterForm from '../FooterForm/FooterForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import useFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';
import mainApi from '../../utils/MainApi'
import './Profile.css';
import Header from '../Header/Header';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  useEffect(() => {
    setServerErrorMessage('');
  }, [values]);

  useEffect(() => {
    const condition1 =
      (values.name === currentUser.name) &&
      (values.email === currentUser.email);

    const condition2 = (
      (values.name !== currentUser.name) ||
      (values.email !== currentUser.email)
    ) && !isValid;

    setIsSubmitDisabled(condition1 || condition2);
  }, [values, currentUser, isValid]);

  useEffect(() => {
    const msgName = errors.name ? `Имя: ${errors.name}` : '';
    const msgEmail = errors.email ? `Почта: ${errors.email}` : '';
    setErrorMessage(`${msgName} ${msgEmail}`);
  }, [errors]);

  // Сохранение изменений
  const handleSubmit = (event) => {
    event.preventDefault();
    setServerErrorMessage('Сохранение...');

    mainApi.updateUser(values)
      .then((data) => {
        setServerErrorMessage('Информация о пользователе сохранена.');
        currentUser.name = data.name;
        currentUser.email = data.email;
        resetForm({ name: currentUser.name, email: currentUser.email });
        setTimeout(() => setServerErrorMessage(''), 1000);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setServerErrorMessage("Некорректное значение одного или нескольких полей");
            break;
          case 409:
            setServerErrorMessage(`Пользователь ${values.email} уже существует.`);
            break;
          default:
            setServerErrorMessage(`Невозможно сохранить данные на сервере. Ошибка ${err}.`);
          }
      });
  };

  return (
    <div className='profile'>
      <Header>
        <Navigation
          customNavigationHeaderBlock='profile__header'
        />
      </Header>
      <Form
        customForm='profile__form'
        name='profile'
        title={`Привет, ${currentUser.name}!`}
        onSubmit={handleSubmit}
        customFormMain='profile__form__main'
      >
        <fieldset className='profile__fieldset-main'>
          <Input
            customInput='profile__input'
            customInputContainer='profile__input-container'
            customInputItem='profile__input-item'
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
            customInput='profile__input'
            customInputContainer='profile__input-container profile__input-container_border-none'
            customInputItem='profile__input-item'
            type="email"
            id="email" name="email"
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            maxLength="30" minLength="2"
            placeholder="E-mail"
            required
            errorId="email-error"
            isError={errors.email || (errorMessage && serverErrorMessage)}
            errorText={errors.email || (errorMessage && serverErrorMessage)}
            onChange={handleChange}
            value={values.email || ''}
          >
            E-mail
          </Input>
        </fieldset>

        <FooterForm
          customFooterForm='profile__footer'
          buttonText='Редактировать'
          customFooterFormButton='profile__footer__button-edit'
          customFooterFormTextContainer='profile__footer__text-container'
          disabled={!isSubmitDisabled}
        >
          <button
            className='profile__footer__button-login opacity'
            type='button'
            onClick={props.handleLogout}
          >
            Выйти из аккаунта
          </button>
        </FooterForm>
      </Form>
    </div>
  );
}

export default Profile;
