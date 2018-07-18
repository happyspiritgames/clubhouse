import React, { Component } from 'react';
import SignInPanel from './SignInPanel'
import { Jumbotron } from 'reactstrap';

class AnonymousHomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">Join the Club</h1>
        <SignInPanel />
      </Jumbotron>
    );
  }
}

export default AnonymousHomePage;
