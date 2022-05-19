import React from 'react';
import './Form.css';

function Form (props) {
  return (
    <form
      className={`form ${props.customForm}`}
      name={props.name}
      onSubmit={props.onSubmit}
    >
      <h2 className={`form__title ${props.customFormTitle}`}>
        {props.title}
      </h2>
      <div className={`form__main ${props.customFormMain}`}>
        {props.children}
      </div>
    </form>
  )
}

export default Form;
