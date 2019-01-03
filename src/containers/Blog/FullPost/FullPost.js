import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
        Axios.get("/posts/" + this.props.match.params.id).then(
          response => {
            // console.log(response);
            this.setState({ loadedPost: response.data });
          }
        );
      }
    }
  }

  deletePostHandler = () => {
    Axios.delete("/posts/" + this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    // null is treated as false. so when id will be null
    // then this.props.id will return false.
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;