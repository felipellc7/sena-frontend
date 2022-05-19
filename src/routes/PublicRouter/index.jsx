import React, { useContext } from 'react'
import { Routes, BrowserRouter } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "../RouteType"
import PrivateContainer from '../../containers/PrivateContainer'
import LoginScreen from '../../pages/AuthScreens/Login'
import { StoreContext } from '../../store/context/storeContext';

const PublicRouter = () => {
  const { isLogged } = useContext(StoreContext)
  const logged = isLogged;

  return (
    <BrowserRouter>
      <Routes>
        <PublicRoute exact path="/login" element={<LoginScreen />} isAuthenticated={logged} />
        <PrivateRoute path="/" element={<PrivateContainer />} isAuthenticated={logged} />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter