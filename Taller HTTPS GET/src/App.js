import React, { Component } from 'react';
import PersonList from './Components/PersonList';
import classes from "./App.css";

class App extends Component {
  render(){
    return (
      <div>
        <header className={classes.Appheader}>
          <h1>Users</h1>
        </header>
        <PersonList/>
      </div>
    )
  }
}

export default App;
