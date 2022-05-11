import React from 'react';
import './FooterForAuth.css';

function FooterForAuth (props) {
  return (
    <div className={`footer-for-auth ${props.customFooterForAuth}`}>
      <button
        className={`footer-for-auth__button ${props.customFooterForAuthButton}`}
        type={props.buttonType || 'button'}
      >
        {props.buttonText}
      </button>
      <div className={`footer-for-auth__content ${props.footerForAuthContent}`}>
        {props.children}
      </div>
    </div>
  )
}

export default FooterForAuth;
