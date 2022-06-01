import React from 'react';
import { Link } from 'react-router-dom';
import './SignInBtn.css';

function SignInBtn() {
  return (
    <Link className="sign-in-btn" to="/signin">Войти</Link>
  );
}

export default SignInBtn;
