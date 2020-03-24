import React,{ Component } from 'react';
import './User.css'

class User extends Component{
    state = {
    users: [],
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users, cargando: false }))
      .catch(error => {
        // Manejo del error
      })
  }

    render(){
        return(
            <div className="tarjet">
                
        <h1 className="titulo">Peticion HTTP a json</h1>
                <ul className="taarjet">
                {this.state.users.map(user => (
                <li key={user.id} className="list">
                    <h1 className="data">Nombre: "{ user.name }" </h1>
                    <h1 className="data">Correo: "{ user.email }" </h1>
                    
                </li>
                ))}
                

                </ul>
            </div>
        )
    }


}
export default User;
