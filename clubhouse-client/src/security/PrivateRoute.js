import React from 'react'
import { Route } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react'

const PrivateRoute = (props) => (
  <Route {...props} />
);

export default withAuthenticator(PrivateRoute);
