import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {
      // eslint-disable-next-line react/jsx-props-no-spreading
        () => (props.loggedIn === true ? <Component {...props} /> : <Redirect to="./signin" />)
      }
  </Route>
);

export default ProtectedRoute;
