import * as React from 'react';
import '../App.css';

class SignInPanel extends React.Component {
  render() {
    const cognitoEndpoint = 'https://happyspiritgames.auth.us-west-2.amazoncognito.com'
    const responseType = 'token'
    const clientId = '3jgcupa4o95gcq98qmimb2qqt7'
    const redirectUrl = 'http://localhost:3000/signin';
    const signInUrl = `${cognitoEndpoint}/login?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUrl}`
    return (
      <div className="panel" id="memberAccessPanel">
        <h2>Free Member Access</h2>
        <a href={signInUrl}>Sign Up. Sign In.</a>
      </div>
    );
  }
}

export default SignInPanel;
