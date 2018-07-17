import * as React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import fakeAuth from '../security/fakeAuth';

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

class SignOutPanel extends React.Component {
  render() {
    return (
      <div className="panel" id="memberAccessPanel">
        <h2>Sign Out</h2>
        <AuthButton />
      </div>
    );
  }
}

export default SignOutPanel;
