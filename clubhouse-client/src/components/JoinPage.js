import React, { Component } from 'react';
import SignInPanel from './SignInPanel'
import '../App.css';

class AnonymousHomePage extends Component {
  render() {
    return (
      <div>
        <h1>Join the Club</h1>
        <p>It's free. Anyone can join.</p>
        <p>(Make sure you have permission if you are under 13.)</p>
        <SignInPanel />
      </div>
    );
  }
}

export default AnonymousHomePage;
