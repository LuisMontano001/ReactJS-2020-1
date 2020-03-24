import React, { Component } from 'react';

class lista extends Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users, cargando: false }))
      .catch(error => {
        // Manejo del error
      })
  }

  render () {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }

    return (
      <div>
        <h1>petición Http</h1>
        <h2>{ this.state.text }</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              Usuario:
              { user.name }
              { user.email }
              { user.phone }
              --------------------------------
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default lista;

