import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main'
// import Navigation from '../Navigation/Navigation'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css'
import Profile from '../Profile/Profile';

function App () {

  return (
    // <CurrentUserContext.Provider>
      <div className="app">
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>

          <Route path="/saved-movies">
            <SavedMovies />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            {/* <Login onLogin={handleLogin}
              errorMessage={resultMessage}
              resetMessage={resetResultMessage}
              history={history} */}
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route exact path="/"> {/*exact ===  полный url */}
            <Main/> {/* страница «О проекте».*/}
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    // </CurrentUserContext.Provider>
  )
};

export default App;

