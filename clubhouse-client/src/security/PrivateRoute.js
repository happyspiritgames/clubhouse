import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const isAuthenticated = () => {
  console.log('isAuthenticated', Auth.user)
  return Auth.user !== null
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props => (
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect to='/join' />
      )}
  />
)

export default PrivateRoute
