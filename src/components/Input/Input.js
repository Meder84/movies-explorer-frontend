import React from 'react';
import './Input.css';

const Input = ({ type, errorText, errorId, isError, children, ...props}) => (
  <ul className={`input ${props.customInput || ''}`}>
    <li
      className={`
        input__container
        ${props.customInputContainer || ''}
        ${isError ? 'input__container_error' : ''}
      `}>
      <label className={`input__label ${props.customInputLabel || ''}`}>
        {children}
      </label>

      <input
        type={type}
        className={`
          input__item
          hide-part-text
          ${props.customInputItem || ''}
          ${isError ? 'input__item_error' : ''}
        `}
        {...props}
      />
    </li>

    <span
      className={`
        input__error
        ${isError ? 'input__error_show' : ''}
        ${props.customInputError || ''}
      `}
      id={errorId}
    >
      {errorText}
    </span>
  </ul>
);

export default Input;
