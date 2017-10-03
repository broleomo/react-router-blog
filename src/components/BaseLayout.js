import React, {Component} from 'react';
import '../styles/App.css';

import {NavLink} from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

export default class BaseLayout extends Component {
  render(){
    return(
      <div>
        <Navbar className="navbar">
            <NavItem>
              <NavLink className="navlink" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/create">Create Post</NavLink>
            </NavItem>
              <NavItem>
                <NavLink className="navlink" to="/list">Blog Posts</NavLink>
              </NavItem>
          </Navbar>
            {this.props.children}

      </div>
    )
  }

}
