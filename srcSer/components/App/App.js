import React, { useEffect } from 'react';
import {
  Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import mainApi from '../../utils/MainApi';
import { getAllMovies } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';

function App() {
  const [isSignUpError, setIsSignUpError] = React.useState(false);
  const [isSignInError, setIsSignInError] = React.useState(false);

  const [editIsSuccess, setEditIsSuccess] = React.useState(false);
  const [editIsFailed, setEditIsFailed] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState('');

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  console.log(filterSavedMovies);
  const [query, setQuery] = React.useState('');

  const history = useHistory();
  const location = useLocation();

  const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    mainApi
      .getUserInfo(token)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem('currentUser', JSON.stringify(userData));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem('token');
          history.push('/');
        });
    }
  }, []);

  const signInHandler = (email, password) => {
    mainApi
      .signIn(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          getCurrentUser();
          history.push('/movies');
        }
      })
      .catch((err) => {
        setIsSignInError(true);
        console.error(err);
      });
  };

  const signUpHandler = (name, email, password) => {
    mainApi
      .signUp(name, email, password)
      .then((data) => {
        if (data) {
          signInHandler(email, password);
        }
      })
      .catch((err) => {
        setIsSignUpError(true);
        console.error(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    setLoggedIn(false);
    setCurrentUser({});

    localStorage.removeItem('allMovies');
    localStorage.removeItem('savedMovies');
    setAllMovies([]);
    setSavedMovies([]);
    setFilterMovies([]);
    setFilterSavedMovies([]);

    history.push('/');
  };

  const changeProfileData = (newUserData) => {
    const { name, email } = newUserData;
    mainApi.saveUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setEditIsSuccess(true);
        setEditIsFailed(false);
        setTimeout(() => {
          setEditIsSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setEditIsFailed(true);
        setTimeout(() => {
          setEditIsFailed(false);
        }, 3000);
      });
  };

  const getAllMoviesData = () => {
    getAllMovies()
      .then((data) => {
        const allMoviesData = data.map((item) => {
          const imageURL = item.image ? item.image.url : '';
          return {
            ...item,
            image: `https://api.nomoreparties.co${imageURL}`,
            trailer: item.trailerLink,
          };
        });

        localStorage.setItem('allMovies', JSON.stringify(allMoviesData));
        setAllMovies(allMoviesData);
      })
      .catch(() => {
        localStorage.removeItem('allMovies');
        setLoadingError('Во время запроса произошла ошибка. '
          + 'Возможно, проблема с соединением или сервер недоступен. '
          + 'Подождите немного и попробуйте ещё раз');
      });
  };

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((data) => {
        const savedArray = data.map((item) => ({ ...item, id: item.movieId }));
        localStorage.setItem('savedMovies', JSON.stringify(savedArray));
        setSavedMovies(savedArray);
      })
      .catch(() => {
        localStorage.removeItem('savedMovies');
        setLoadingError('Во время запроса произошла ошибка. '
          + 'Возможно, проблема с соединением или сервер недоступен. '
          + 'Подождите немного и попробуйте ещё раз');
      });
  };

  useEffect(() => {
    const allMoviesArr = JSON.parse(localStorage.getItem('allMovies'));
    if (allMoviesArr) {
      setAllMovies(allMoviesArr);
    } else {
      getAllMoviesData();
    }

    const saved = JSON.parse(localStorage.getItem('savedMovies'));
    if (saved) {
      setSavedMovies(saved);
    } else {
      getSavedMovies();
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getAllMoviesData();
      getSavedMovies();
    }
  }, [loggedIn]);

  const isMovieAdded = (movie) => savedMovies.some((item) => item.id === movie.id);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
      if (filterData.length === 0) {
        setLoadingError('Ничего не найдено');
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
      setQuery(searchQuery);
      setFilterMovies(searchFilter(allMovies, searchQuery));
      setIsLoading(false);
    }, 600);
  };

  const addToBookmarks = (movie) => {
    mainApi
      .addBookmark(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeFromBookmark = (movie) => {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    mainApi
      .removeBookmark(movieId)
      .then((res) => {
        if (res) {
          const newArray = savedMovies.filter((item) => item.movieId !== res.movieId);
          setSavedMovies(newArray);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const bookmarkHandler = (m, isAdded) => (isAdded ? addToBookmarks(m) : removeFromBookmark(m));

  useEffect(() => {
    setFilterSavedMovies(searchFilter(savedMovies, query));
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <div className="App">
      <div className="page-container">
        <CurrentUserContext.Provider value={currentUser}>

          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            <Header isLoggedIn={loggedIn} />
          </Route>

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute
              exact
              path="/movies"
              loggedIn={loggedIn}
              isLoading={isLoading}
              loadingError={loadingError}
              component={Movies}
              savedMovies={false}
              movies={filterMovies}
              onSubmitSearch={searchHandler}
              onBookmarkClick={bookmarkHandler}
              isMovieAdded={isMovieAdded}
            />

            <ProtectedRoute
              exact
              path="/saved-movies"
              loggedIn={loggedIn}
              isLoading={isLoading}
              loadingError={loadingError}
              component={SavedMovies}
              savedMovies
              movies={savedMovies}
              onBookmarkClick={bookmarkHandler}
              isMovieAdded={isMovieAdded}
            />

            <ProtectedRoute
              exact
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              changeUserInfo={changeProfileData}
              logOutHandler={handleLogout}
              editIsSuccess={editIsSuccess}
              editIsFailed={editIsFailed}
              currentUser={currentUser}
            />

            <Route path="/signup">
              <Register signUpHandler={signUpHandler} isSignUpError={isSignUpError} />
            </Route>

            <Route path="/signin">
              <Login signInHandler={signInHandler} isSignInError={isSignInError} />
            </Route>

            <Route component={NotFound} />
          </Switch>

          <Route exact path={['/', '/movies', '/saved-movies']}>
            <Footer />
          </Route>
        </CurrentUserContext.Provider>

      </div>

    </div>
  );
}

export default App;
