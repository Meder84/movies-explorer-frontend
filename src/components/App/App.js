import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import './App.css'
import Profile from '../Profile/Profile';

function App () {

  return (
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
  )
};

export default App;

