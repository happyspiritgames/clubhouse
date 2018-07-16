import * as React from 'react';
import '../App.css';

class AccessPanel extends React.Component {
  render() {
    const cognitoEndpoint = 'https://happyspiritgames.auth.us-west-2.amazoncognito.com'
    const responseType = 'token'
    const clientId = '3jgcupa4o95gcq98qmimb2qqt7'
    const redirectUrl = 'http://localhost:3000/signin';
    const signInUrl = `${cognitoEndpoint}/login?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUrl}`
    return (
      <div className="panel" id="memberAccessPanel">
        <h1>Member Access</h1>
          <a href={signInUrl}>Click Here to Sign In</a>
      </div>
    );
  }
}

export default AccessPanel;
