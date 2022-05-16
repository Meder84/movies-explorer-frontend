import React from 'react';
import './Input.css';

const Input = ({ type, errorText, errorId, children, ...props}) => (
  <ul className={`input ${props.customInput || ''}`}>
    <li className={`input__container ${props.customInputContainer || ''}`}>
      <label className={`input__label ${props.customInputLabel || ''}`}>
        {children}
      </label>

      <input
        type={type}
        className={`input__item ${props.customInputItem || ''} hide-part-text`}
        {...props}
      />
    </li>

    <span
      className={`input__error input__error_show ${props.customInputError || ''}`}
      id={errorId}
    >
      {errorText}
    </span>
  </ul>
);

export default Input;
