import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, } from 'react-router-dom';
import Main from '../Main/Main'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import { SAVED_MOVIES_STOREGE, MOVIES_STOREGE, BAD_REQUEST, DEFAULT_ERROR } from '../../utils/consts';
import moviesApi, { MOVIES_URL } from '../../utils/MoviesApi';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import './App.css'

function App () {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: ''});
  const [message, setMessage] = useState('');

  useEffect(() => {
    tokenCheck()
  }, [loggedIn]);

  function handleRegister(name, email, password, formReset) {
    let messageText = '';

    auth.register(name, email, password)
    .then(() => {
      formReset();
      auth.authorize(email, password)
        .then((data) => {
          if (!data) return;

          localStorage.setItem('jwt', data.token);
          formReset();
          history.push('/movies');
          setLoggedIn(true)
        })
        .catch(() => {
          setMessage(BAD_REQUEST);
        })
    })
    .catch((err) => {
      switch (err) {
        case 400:
          messageText = BAD_REQUEST;
          break;
        case 409:
          messageText = `Пользователь ${email} уже существует`;
          break;
        default:
          messageText = DEFAULT_ERROR;
      }
    })
    .finally(() => setMessage(messageText))
  }

  function handleLogin (email, password, formReset) {
    let messageText = '';

    auth.authorize(email, password)
      .then((data) => {
        if (!data) return;

        localStorage.setItem('jwt', data.token);
        formReset();
        history.push('/movies');
        setLoggedIn(true)
      })
      .catch((err) => {
        switch (err) {
          case 400:
            messageText = BAD_REQUEST;
            break;
          case 401:
            messageText = `Пользователь ${email} не авторизован!`;
            break;
          default:
            messageText = DEFAULT_ERROR;
        }
      })
      .finally(() => setMessage(messageText))
  }

  function tokenCheck () {
    if (!localStorage.getItem('jwt')) return;

    const jwt = localStorage.getItem('jwt');

    auth.getContent(jwt).then((res) => {
      if (!res) return;

      setCurrentUser({
        name: res.data.name,
        email: res.data.email,
      });
      setLoggedIn(true);
      history.push('/movies');
    })
    .catch(err => {
      console.log(err);
      setLoggedIn(false);
      localStorage.removeItem('jwt');
    });
  }

  function handleLogout () {
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    history.push('/');
  }

  function resetMessage () {
    setMessage('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies
              loggedIn={loggedIn}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies
              loggedIn={loggedIn}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              handleLogout={handleLogout}
            />
          </ProtectedRoute>

          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              message={message}
              resetMessage={resetMessage}
            />
          </Route>

          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              message={message}
              resetMessage={resetMessage}
              history={history}
            />
          </Route>

          <Route exact path="/"> {/*exact ===  полный url */}
            <Main
              loggedIn={loggedIn}
            />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;

