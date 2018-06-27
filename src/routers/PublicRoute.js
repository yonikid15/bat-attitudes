import React from 'react';
import { isAuthenticated } from '../auth0/auth';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated() ? (
        <Redirect to="/dashboard" />
      ) : (
          <Component {...props} />
        )
    )} />
  );

export default PublicRoute;