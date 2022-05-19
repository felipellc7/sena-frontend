import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import Layout from "./../../components/Layout"

const PrivateRoute = (props) => {
  const {isAuthenticated, component: Component, ...rest} = props
  return (
    <Layout>
      <Route {...rest}
        component={(props) => (
          (isAuthenticated) 
            ? (<Component {...props} />)
            : (<Navigate to="/login" />)
        )}
      />
    </Layout>
  )
}

export default PrivateRoute