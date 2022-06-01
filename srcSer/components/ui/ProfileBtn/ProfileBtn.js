import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileBtn.css';

function ProfileBtn() {
  return (
    <Link to="/profile" className="profile-btn">
      Аккаунт
      <div className="profile-btn__image" />
    </Link>
  );
}

export default ProfileBtn;
