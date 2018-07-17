import React, { Component } from 'react';
import '../App.css';
import SignOutPanel from './SignOutPanel';

class AnonymousHomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Clubhouse!</h1>
        <p>Now you can do anything a member can do. Wow!</p>
        <SignOutPanel />
      </div>
    );
  }
}

export default AnonymousHomePage;
