import React, { Component } from 'react';
import Posts from './Components/Posts/Posts'
import './App.css';
import axios from './instances/instances/axiosInstance';


class App extends Component {
  state = {
    posts: [],
    newPostInfo: {
      title: "",
      author: "",
      year: ""
    }
  }
  componentDidMount () {
    axios.get()
      .then(response => {
        const posts = response.data;

        const updatedPosts = posts.map(post => {
          return {
            title: post.title,
            author: post.author,
            year: post.year
          }
        });

        this.setState({posts: updatedPosts})
      })
  }
  render(){
    return (
    <Posts posts = {this.state.posts} />
    )  
  }
}

export default App;
