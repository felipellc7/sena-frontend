import React, { useContext } from 'react'
import { Switch, BrowserRouter } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "../RouteType"
import PrivateContainer from '../../containers/PrivateContainer'
import LoginScreen from '../../pages/AuthScreens/Login'
import { StoreContext } from '../../store/context/storeContext';

const PublicRouter = () => {
  const { isLogged } = useContext(StoreContext)
  const logged = isLogged;

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