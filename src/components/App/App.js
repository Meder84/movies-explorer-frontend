import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as auth from '../../utils/auth';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import './App.css'

export const initState = {
  name: '',
  email: '',
  password: '',
  // message: '',
  loggedIn: false,
}

function App () {
  const history = useHistory();
  const [state, setState] = useState(initState);
  const [message, setMessage] = useState('');

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleRegister(name, email, password, formReset) {
    let messageText = '';

    auth.register(name, email, password)
    .then(() => {
      setState((old) => ({
        ...old
      }));

      formReset();
      history.push('/signin');
    })
    .catch((err) => {
      switch (err) {
        case 400:
          messageText = "Некорректные данные";
          break;
        case 409:
          messageText = `Пользователь ${email} уже существует`;
          break;
        default:
          messageText = "Что-то пошло не так! Попробуйте ещё раз.";
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
        setState({
          loggedIn: true,
          email: email,
        });
      })
      .catch((err) => {
        switch (err) {
          case 400:
            messageText = 'Некорректные данные!';
            break;
          case 401:
            messageText = `Пользователь ${email} не авторизован!`;
            break;
          default:
            messageText = 'Что-то пошло не так! Попробуйте ещё раз.';
        }
      })
      .finally(() => setMessage(messageText))
  }

  function handleLogout () {
    localStorage.removeItem('jwt');
    history.push('/signup');
  }

  function tokenCheck () {

    // если у пользователя есть токен в localStorage,
    // эта функция проверит, действующий он или нет
    if (!localStorage.getItem('jwt')) return;

    const jwt = localStorage.getItem('jwt');

    auth.getContent(jwt).then((res) => {
      if (!res) return;

      setState({
        loggedIn: true,
        name: res.data.name,
        email: res.data.email,
      });

      history.push("/movies");
    })
    .catch(err => {
      console.log(err);
    });
  }

  function resetMessage () {
    setMessage('');
  }

  return (
    <CurrentUserContext.Provider value={state.name && state.email}>
      <div className="app">
        <Switch>
          <ProtectedRoute path="/movies" loggedIn={state.loggedIn}>
            <Movies />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={state.loggedIn}>
            <SavedMovies />
          </ProtectedRoute>

          <ProtectedRoute path="/profile" loggedIn={state.loggedIn}>
            <Profile />
          </ProtectedRoute>

          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              message={message}
              resetMessage={resetMessage}
              // history={history}
            />
          </Route>

          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              message={message}
              resetMessage={resetMessage}
            />
          </Route>

          <Route exact path="/"> {/*exact ===  полный url */}
            <Main/> {/* страница «О проекте».*/}
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

