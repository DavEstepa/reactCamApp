import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <>
        <Navbar dark expand="md">
            <NavbarBrand href="/">Beyond Safety</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to='/camform'>Cam</NavLink>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href="https://github.com/DavEstepa">GitHub</a>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </>
    );
  }
}