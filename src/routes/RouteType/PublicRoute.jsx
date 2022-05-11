import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = props => {
  const {isAuthenticated, component: Component, ...rest} = props
  return (
    <Route {...rest}
      component={(props) => (
        (!isAuthenticated)
          ? (<Component {...props} />)
          : (<Redirect to="/dashboard" />)
      )}
    />
  )
}

export default PublicRoute;