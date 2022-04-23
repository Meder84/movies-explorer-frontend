import React, { useState, useEffect } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Promo

function Main(props) {

  const [currentUser, setCurrentUser] = useState({
    about: '',
    avatar: '',
    email: '',
    name: '',
    _id: 0,
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Promo />
    </CurrentUserContext.Provider>
  )
}
