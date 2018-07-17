import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to the Happy Spirit Games Clubhouse!</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/join'>Join</Link></li>
            <li><Link to='/member'>Members Only</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
