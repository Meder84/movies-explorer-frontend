import React from 'react';
import './Form.css';

function Form ({
  customForm, name, onSubmit, customFormTitle,
  title, customFormMain, children
}) {
  return (
    <form
      className={`form ${customForm}`}
      name={name}
      onSubmit={onSubmit}
    >
      <h2 className={`form__title ${customFormTitle}`}>
        {title}
      </h2>
      <div className={`form__main ${customFormMain}`}>
        {children}
      </div>
    </form>
  )
}

export default Form;
