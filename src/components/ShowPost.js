import React, {Component} from 'react';

import '../styles/App.css';

export default class ShowPost extends Component {
  state = {
    results: ''
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(url)
      .then(response => response.json())
        .then(results => {
          this.setState({results:results});
        });
  }

  render(){
    return(
      <div className='container'>
        <div className="blog-display">
        <p className="blog-title">Title: {this.state.results.authorName} </p>
        <p className="authorName">Author: {this.state.results.authorName}</p>
        <p className="blogEntry"> {this.state.results.blogEntry}</p>
        </div>
      </div>
    );
  }
}
