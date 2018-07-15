import React, { Component } from 'react'

class Login extends Component {
  render() {
    const signinCodeUri = 'https://happyspiritgames.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=3jgcupa4o95gcq98qmimb2qqt7&redirect_uri=http://localhost:3000/signin'
    const signinTokenUri = 'https://happyspiritgames.auth.us-west-2.amazoncognito.com/login?response_type=token&client_id=3jgcupa4o95gcq98qmimb2qqt7&redirect_uri=http://localhost:3000/signin'
    return (
      <div>
        <a href={signinCodeUri}>Sign in and get a code</a> <a href={signinTokenUri}>Sign in and get a token</a>
      </div>
    )
  }
}

export default Login
