import React, {Component} from 'react';


export default class CreatePost extends Component {
  render(){
    return(
      <div>
        <form className="form-fields"action="/show">
          <label for="name">Author Name</label>
          <input type="text" name="name" placeholder="Author's name"/>
          <br/>
          <label for="title">Title</label>
          <input type="text" name="title" placeholder="Title"/>
          <br/>
          <label for="blog">Write your own blog...</label>
          <textarea rows="10" cols="5" name="blog" id="blog"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
