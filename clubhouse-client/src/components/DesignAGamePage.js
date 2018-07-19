import React, { Component } from 'react';
import SignOutPanel from './SignOutPanel';
import { Jumbotron } from 'reactstrap';

class DesignAGamePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">Design a Game</h1>
        <p>This introductory course will show you how to get started designing games. All you need is time and creativity.</p>
        <SignOutPanel />
      </Jumbotron>
    );
  }
}

export default DesignAGamePage;
