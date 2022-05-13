import React from 'react'
import { Switch, BrowserRouter } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "../RouteType"
import PrivateContainer from '../../containers/PrivateContainer'
import LoginScreen from '../../pages/AuthScreens/Login'

const PublicRouter = () => {
  const logged = true;

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={logged} />
        <PrivateRoute path="/" component={PrivateContainer} isAuthenticated={logged} />
      </Switch>
    </BrowserRouter>
  )
}

export default PublicRouter