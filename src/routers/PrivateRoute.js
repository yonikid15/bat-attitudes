import React from 'react';
import { isAuthenticated } from '../auth0/auth';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated() ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

export default PrivateRoute;