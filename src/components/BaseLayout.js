import React, {Component} from 'react';
import '../styles/App.css';

import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return(
      <div>
      <nav className="nav-bar">
      <ul className="navbar-header">
      <li>
      <NavLink exact to="/" activeClassName=''>PollyBlog</NavLink>
      </li>
      <li>
        <NavLink  to="/create" activeClassName=''>Create Post</NavLink>
      </li>
      <li>
      <NavLink exact to="/show" activeClassName=''>Show All Posts</NavLink>
      </li>
      </ul>
      </nav>
      {this.props.children}
      </div>
    )
  }

}
