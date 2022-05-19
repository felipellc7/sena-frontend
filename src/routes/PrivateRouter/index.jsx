import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import routeList from '../routeList';

const PrivateRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(route => (
          <Route key={route.name} exact {...route} />
        ))}
        <Navigate to="/dashboard" />
      </Routes>
    </BrowserRouter>
  )
}

export default PrivateRouter