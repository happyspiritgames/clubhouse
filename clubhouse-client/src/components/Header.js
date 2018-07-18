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
              <NavLink href='/join'>Join</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/member'>Members Only</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
