import React, { Component } from 'react'
import './App.css';

import Radium from 'radium';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className='App--container'>
        <TodoList />
      </div>
    )
  }
}

export default Radium(App);