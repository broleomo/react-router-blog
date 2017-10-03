import React, {Component} from 'react';


export default class CreatePost extends Component {
    state = {
      authorName: '',
      blogTitle: '',
      blogEntry: ''
    }

addToList = (e) => {
  e.preventDefault();
  const URL = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/';
  fetch( URL, {
    method: "POST",
    body: JSON.stringify(this.state),
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
      console.log(response, "woot!");
    }).catch(err => {
      console.log(err, "oh no!");
    });
    this.setState({authorName: '', blogTitle: '', blogEntry:''});
  }

handle = field => e => this.setState({[field]: e.target.value})

  render(){
    return(
      <div>
        <form className="form-fields"action="/show">
          <label for="name">Author Name</label>
          <input onChange={this.handle("authorName")} value={this.state.authorName} type="text" name="name" placeholder="Author's name"/>
          <br/>
          <label for="title">Title</label>
          <input onChange={this.handle("blogTitle")} type="text" name="title" placeholder="Title" value={this.state.blogTitle}/>
          <br/>
          <label for="blog">Write your own blog...</label>
          <textarea onChange={this.handle("blogEntry")} value={this.state.blogEntry} rows="10" cols="5" name="blog" id="blog"/>
          <input type="submit" onClick={this.addToList}/>
        </form>
      </div>
    )
  }

}
