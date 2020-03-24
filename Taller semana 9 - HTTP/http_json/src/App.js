import React, { Component } from 'react'
import User from './Components/User';
import './App.css'

class App extends Component {
  state = {
    users: [],
  }

  

  render () {

    return (
      <div className="Workplace">
        <h1 className="Titulo">Peticion HTTP a json</h1>
        <User/>

      </div>
    )
  }
}

export default App