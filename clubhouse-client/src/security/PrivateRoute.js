import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const isAuthenticated = () => Auth.user !== null

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/join' />
  )} />
)

export default PrivateRoute
