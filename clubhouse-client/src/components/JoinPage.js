import React, { Component } from 'react';
import SignIn from '../security/SignIn'
import SignUp from '../security/SignUp'
import { Jumbotron } from 'reactstrap';

class AnonymousHomePage extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1 className="text-center">Join the Club</h1>
      </Jumbotron>
      <SignIn />
      <SignUp />
      </div>
    );
  }
}

export default AnonymousHomePage;
