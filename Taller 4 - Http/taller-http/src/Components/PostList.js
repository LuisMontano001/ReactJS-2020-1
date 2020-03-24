import React, { Component } from 'react';
import './PostList.css';
class PostList extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }
componentDidMount () {
    fetch ('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(todos => this.setState({todos}))
}



render () {

    return (
      <div>
        <h1>Posts</h1>
        <h2>{ this.state.text }</h2>
        <div class="card">
          {this.state.todos.map(todo => (
            <li key={todo.id}>
             <h3>Post</h3> 
             <div>
             { todo.id }
              { todo.title }
              { todo.completed }
             </div>

            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default PostList;
