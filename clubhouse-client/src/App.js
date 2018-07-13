import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <a href="https://happyspiritgames.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=3jgcupa4o95gcq98qmimb2qqt7&redirect_uri=http://localhost:3000/signin">Sign in for a code.</a>
        </p>
        <p className="App-intro">
          <a href="https://happyspiritgames.auth.us-west-2.amazoncognito.com/login?response_type=token&client_id=3jgcupa4o95gcq98qmimb2qqt7&redirect_uri=http://localhost:3000/signin">Sign in for a token.</a>
        </p>
      </div>
    );
  }
}

// https://happyspiritgames.auth.us-west-2.amazoncognito.com/oauth2/idpresponse
export default App;
