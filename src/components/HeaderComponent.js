import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import Profile from './ProfileComponent';

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
            <Link to='/' className='navbar-brand'>Beyond Safety</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar className='justify-content-end'>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="nav-link" to='/'>
                        <span className="fa fa-home fa-lg"></span> Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href="https://github.com/DavEstepa">
                        <span className="fa fa-github fa-lg"></span> GitHub
                        </a>
                    </NavItem>
                    <NavItem>
                    <Profile user={this.props.user} signIn={this.props.signIn} exit={this.props.exit}/>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </>
    );
  }
}