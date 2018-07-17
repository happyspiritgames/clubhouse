import React, { Component } from 'react';
import '../App.css';
import SignInPanel from './SignInPanel'

class AnonymousHomePage extends Component {
  render() {
    return (
      <div>
        <h1>Who Are You?</h1>
        <p>You can play a game.</p>
        <p>Beyond that, you will need to sign in.</p>
        <SignInPanel />
      </div>
    );
  }
}

export default AnonymousHomePage;
