import * as React from 'react';
import { Redirect } from 'react-router-dom';

export default class SigninCallback extends React.Component {
  render() {
    return (
      <Redirect
        to={{
          pathname: "/design-a-game",
          state: { from: this.props.location }
        }}
      />
    );
  }
}