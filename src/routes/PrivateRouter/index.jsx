import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import routeList from '../routeList';

const PrivateRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routeList.map(route => (
          <Route key={route.path} exact {...route} />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  )
}

export default PrivateRouter