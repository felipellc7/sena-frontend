import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Layout from "./../../components/Layout"

const PrivateRoute = (props) => {
  const {isAuthenticated, component: Component, ...rest} = props
  return (
    <Layout>
      <Route {...rest}
        component={(props) => (
          (isAuthenticated) 
            ? (<Component {...props} />)
            : (<Redirect to="/login" />)
        )}
      />
    </Layout>
  )
}

export default PrivateRoute