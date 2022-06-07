import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, } from 'react-router-dom';
import Main from '../Main/Main'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import { savedMoviesStorage, moviesStorage } from '../../utils/consts';
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

  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState('');

  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);

  useEffect(() => {
    tokenCheck()
  }, [loggedIn]);

  function handleRegister(name, email, password, formReset) {
    let messageText = '';

    auth.register(name, email, password)
    .then(() => {
      formReset();
      history.push('/signin');
      setLoggedIn(true);
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
        setLoggedIn(true)
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
    history.push('/signup');
  }

  function resetMessage () {
    setMessage('');
  }

  const getAllMovies = () => {
    moviesApi.getAllMovies()
      .then((data) => {
        const allMoviesData = data.map((item) => {
          const imageURL = item.image ? item.image.url : '';
          return {
            ...item,
            image: `${MOVIES_URL}${imageURL}`,
            movieId: item.id,
          };
        });

        localStorage.setItem(moviesStorage, JSON.stringify(allMoviesData));
        setAllMovies(allMoviesData);
      })
      .catch(() => {
        localStorage.removeItem(moviesStorage);
        setLoadingError('Во время запроса произошла ошибка. '
          + 'Возможно, проблема с соединением или сервер недоступен. '
          + 'Подождите немного и попробуйте ещё раз');
      });
  };

  const getSavedMovies = () => {
    mainApi.getSavedMovies()
      .then(({data}) => {
        console.dir(data);
        if(!data) return;
        const savedMoviesArr = data.map((item) => ({ ...item, id: item.movieId }));

        localStorage.setItem(savedMoviesStorage, JSON.stringify(savedMoviesArr));
        setSavedMovies(savedMoviesArr);
      })
      .catch(() => {
        localStorage.removeItem(savedMoviesStorage);
        setLoadingError('Сохраненные фильмы отсутсвуют.');
      });
  };

  useEffect(() => {
    const allMoviesArr = JSON.parse(localStorage.getItem(moviesStorage));
    if (allMoviesArr) {
      setAllMovies(allMoviesArr);
    } else {
      getAllMovies();
    }

    const savedMovies = JSON.parse(localStorage.getItem(savedMoviesStorage));
    if (savedMovies) {
      setSavedMovies(savedMovies);
    } else {
      getSavedMovies();
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getAllMovies();
      getSavedMovies();
    }
  }, [loggedIn]);

  const selectedMovies = (movie) => savedMovies.some((item) => item.movieId === movie.movieId);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
      if (filterData.length === 0) {
        setLoadingError('Ничего не найдено!');
      } else {
        setLoadingError('');
      }
      return filterData;
    }
    return [];
  };

  const searchHandler = (searchQuery) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilterMovies(searchFilter(allMovies, searchQuery));
      setIsLoading(false);
    }, 600);
  };

  const searchHandlerSavedMovies = (searchQuery) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilterSavedMovies(searchFilter(savedMovies, searchQuery));
      setIsLoading(false);
    }, 600);
  };

  const saveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteMovie = (movie) => {
    const movieId = savedMovies.find((item) => item.movieId === movie.movieId);
    mainApi
      .deleteMovie(movieId._id)
      .then((res) => {
        if (res) {
          const newArray = savedMovies.filter((item) => item.movieId !== res.movieId);
          setSavedMovies(newArray);

          const newArrayMovies = allMovies.filter((item) => item.movieId !== res.movieId);
          setAllMovies(newArrayMovies)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onClickSaveDelete = (movie, select) => {
    (select ? saveMovie(movie) : deleteMovie(movie));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies
              isLoading={isLoading}
              loadingError={loadingError}
              movies={filterMovies}
              onSubmitSearch={searchHandler}
              onClickSaveDelete={onClickSaveDelete}
              selectedMovies={selectedMovies}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies
              isLoading={isLoading}
              loadingError={loadingError}
              savedMovies={filterSavedMovies}
              onClickSaveDelete={onClickSaveDelete}
              onSubmitSearch={searchHandlerSavedMovies}
              selectedMovies={selectedMovies}
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
              // history={history}
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
            /> {/* страница «О проекте».*/}
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

