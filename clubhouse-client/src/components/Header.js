import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Happy Spirit Games</NavbarBrand>
          <Nav pills>
            <NavItem>
              <NavLink href='/design-a-game'>Design a Game</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
