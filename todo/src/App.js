import React, { Component } from 'react';
import TodoList from './Containers/TodoList/TodoList';
import Input from './Components/Input/Input';
import { v4 as uuid } from 'uuid';
class App extends Component {
  state = {
    string: "",
    todos: [],
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onClick = e => {
    let todo = {
      id: uuid(),
      to: this.state.string,
      done: false
    }
    this.setState({
      todos: [...this.state.todos, todo],
      string: ""
    }, () => { console.log(this.state.todos) })
  }
  handleDelete = (id) => {
    let array = this.state.todos.filter(item => item.id !== id);
    this.setState({
      todos: array
    });
  }
  handleDone = id => {
    let todo = this.state.todos.find(item => item.id === id);
    todo.done = true;
    let array = this.state.todos.filter(item => item.id !== id);
    array.push(todo);
    this.setState({
      todos: array
    });
  }

  render() {
    return (
      <div className="App" >
        <Input content={this.state.string} onChange={this.handleChange} name="string" type="text" />
        <button onClick={this.onClick} >Add</button>
        <TodoList todos={this.state.todos} delete={this.handleDelete} done={this.handleDone} />
      </div>
    )
  }
}

export default App;
