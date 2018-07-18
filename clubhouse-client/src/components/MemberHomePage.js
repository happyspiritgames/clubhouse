import React, { Component } from 'react';
import SignOutPanel from './SignOutPanel';
import { Jumbotron } from 'reactstrap';

class AnonymousHomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">The Clubhouse</h1>
        <p>Now you can do anything a member can do. Wow!</p>
        <SignOutPanel />
      </Jumbotron>
    );
  }
}

export default AnonymousHomePage;
