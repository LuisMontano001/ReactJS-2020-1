import React, { Component } from 'react';
import styles from './lista.modules.css';

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
        alert('Error cargue de nuevo la pagina.');
      })
  }

  render () {
   

    return (
      <div>
        <h1>petición Http</h1>
        <h2>{ this.state.text }</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <p className={styles.titulo}>Usuario<br></br></p>
              <p> Nombre: </p>
              { user.name }
              <p> Correo: </p>
              { user.email }
              <p> Telefonó: </p>
              { user.phone }
              
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default lista;

