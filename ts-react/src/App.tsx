import * as React from 'react';
import './App.css';
import MemberAccessPanel from './components/MemberAccessPanel'

import logo from './logo.svg';

class App extends React.Component {

  // show MemberAccessPanel to anonymous user
  // members see MemberHomePage

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, Everybody!</h1>
        </header>
        <p className="App-intro">
          We love you. We want you to become a member. It's free!
        </p>
        <p className="App-intro">
          Click on member access. Then sign in or sign up.
        </p>
        <MemberAccessPanel />
      </div>
    );
  }
}

export default App;
