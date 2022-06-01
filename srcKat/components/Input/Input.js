import React from 'react';
import './Input.css';

const Input = ({
  type, errorText, errorId, isError, children, customInput,
  customInputContainer, customInputLabel, customInputError,
  customInputItem, ...props
}) => (
  <ul className={`input ${customInput || ''}`}>
    <li
      className={`
        input__container
        ${customInputContainer || ''}
        ${isError ? 'input__container_error' : ''}
      `}>
      <label className={`input__label ${customInputLabel || ''}`}>
        {children}
      </label>

      <input
        type={type}
        className={`
          input__item
          hide-part-text
          ${customInputItem || ''}
          ${isError ? 'input__item_error' : ''}
        `}
        {...props}
      />
    </li>

    <span
      className={`
        input__error
        ${isError ? 'input__error_show' : ''}
        ${customInputError || ''}
      `}
      id={errorId}
    >
      {errorText}
    </span>
  </ul>
);

export default Input;
