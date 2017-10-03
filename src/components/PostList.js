import React, {Component} from 'react';

import {Link} from 'react-router-dom';


export default class PostList extends Component {
  state = {
    results: []
  }

  componentDidMount(){
    const URL = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/';
    fetch(URL)
      .then(r=>r.json())
        .then(results => {
          this.setState({results:results});
        });
  }

  render(){
    return(
      <div className="container">
      {this.state.results.map(blog => (
        <div key={blog._id}>
          <Link to={`/showpost/${blog._id}`}>
          <h1>{blog.blogTitle}</h1>
          </Link>
            </div>
      ))}
      </div>
    )
  }
}
