import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main'
// import Navigation from '../Navigation/Navigation'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css'

function App () {

  return (
    <CurrentUserContext.Provider>
      <div className="App">
        <Switch>
          <Route path="/movies"
            // loggedIn={loggedIn}
            // component={MoviesPage}
          />

          <Route path="/saved-movies"
            // loggedIn={loggedIn}
            // component={SavedMoviesPage}
          />

          <Route path="/profile"
            // loggedIn={loggedIn}
            // component={ProfilePage}
            // onLogout={handleLogout}
          />

          <Route path="/signin">
            {/* <Login onLogin={handleLogin}
              errorMessage={resultMessage}
              resetMessage={resetResultMessage}
              history={history} */}
          </Route>

          <Route path="/signup">
            {/* <Register onRegister={handleRegister}
              errorMessage={resultMessage}
              resetMessage={resetResultMessage}
              history={history} */}
          </Route>

          <Route exact path="/"> {/*exact ===  полный url*/}
            <Main/> {/* страница «О проекте». */}
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

