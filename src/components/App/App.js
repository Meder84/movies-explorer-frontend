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
  password: '',
  email: '',
  message: '',
  imgTooltip: '',
  loggedIn: false,
}

function App () {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(initState);
  const [state, setState] = useState(initState);

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleLogin (password, email, formReset) {
    auth.authorize(password, email)
      .then((data) => {
        console.dir(data)
        if (!data) return;

        localStorage.setItem(data);
        formReset();
        history.push('/movies');
        setState({
          loggedIn: true,
          email: email,
        });
      })
      .catch( () => {
        setState({
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
          // imgTooltip: cross,
        });
        // setIsInfoTooltipOpen(true)
      })
  }

  function handleRegister(password, email, formReset) {
    auth.register(password, email)
    .then(() => {

      setState((old) => ({
        ...old,
        message: 'Вы успешно зарегистрировались!',
        // imgTooltip: tick,
      }));

      formReset();
      history.push('/signin');
    })
    .catch(() => setState((old) => ({
      ...old,
      message: 'Что-то пошло не так! Попробуйте ещё раз.',
      // imgTooltip: cross,
    })))
    // .finally(() => setIsInfoTooltipOpen(true))
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
        email: res.data.email,
      });

      history.push("/movies");
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
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

