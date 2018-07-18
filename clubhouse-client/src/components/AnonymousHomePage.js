import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class AnonymousHomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">Welcome!!!</h1>
        <p>You can play a game.</p>
        <p>To get to the good stuff, you will need to sign in.</p>
      </Jumbotron>
    );
  }
}

export default AnonymousHomePage;
