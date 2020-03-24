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


maximo =25;
render () {

    return (
      <div className ="todos">
        <h1>Posts</h1>
        <h1>Samuel Sanabria</h1>
          {this.state.todos.map(todo => (
                          
            <li key={todo.id}>
  
             <div className="card">
             <h3>Post: { todo.id }</h3> 
              { todo.title }
              <br/>
              { todo.completed.toString() }
             </div>
                


            </li>
          ))}
        
      </div>
    )
  }
}

export default PostList;
