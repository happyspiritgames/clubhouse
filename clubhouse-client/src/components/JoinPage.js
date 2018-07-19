import React, { Component } from 'react';
import SignIn from '../security/SignIn'
// import SignUp from '../security/SignUp'
import { Jumbotron } from 'reactstrap';

class AnonymousHomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">Join the Club</h1>
        <SignIn />
      </Jumbotron>
    );
  }
}

export default AnonymousHomePage;
