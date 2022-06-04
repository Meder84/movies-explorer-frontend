import React from 'react';
import './FooterForm.css';

function FooterForm (props) {
  return (
    <div className={`footer-for-auth ${props.customFooterForm}`}>
      <button
        className={`
          footer-for-auth__button
          opacity
          ${props.customFooterFormButton}
        `}
        type='submit'
        disabled={props.disabled}
      >
        {props.buttonText}
      </button>
      <div
        className={`
          footer-for-auth__text-container
          ${props.customFooterFormTextContainer}
        `}
      >
        {props.children}
      </div>
    </div>
  )
}

export default FooterForm;
