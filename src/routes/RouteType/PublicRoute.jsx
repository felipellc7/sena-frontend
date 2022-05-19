import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = props => {
  const {isAuthenticated, component: Component, ...rest} = props
  return (
    <Route {...rest}
      element={(props) => (
        (!isAuthenticated)
          ? (<Component {...props} />)
          : (<Navigate to="/dashboard" />)
      )}
    />
  )
}

export default PublicRoute;