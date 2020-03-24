import './App.css';
import React, { Component } from 'react';
import axios from './instancias/axiosInstace';
import Posts from './Components/Post';

class App extends Component {
    constructor() {
        super();
        this.state = {
            paquete: [
                {
                    id: "",
                    title: ""
                }
                
            ]
        }
    }

    componentDidMount() {
        axios.get('BlueWings98/json1/posts')
            .then(response => {
                console.log(response);
                const mostrar = response.data.map(post => {
                    console.log(post);
                    return{
                        id:post.id,
                        title:post.title
                    }
                });
                this.setState({paquete: mostrar})
            })
}
    render() {
        return (
            <div>
            <h1>La siguiente informacion fue traida mediante un Json de Github: </h1>
                <p1>El Json remoto se encuentra en: 'https://my-json-server.typicode.com/BlueWings98/json1/posts'</p1>
                <p1> Y lo estamos accediendo mediante Axios</p1>
            <ul>
                {
                    this.state.paquete.map((mensaje) => {
                        return (<Posts id={mensaje.id} title={mensaje.title}> </Posts>)
                    })
                 }
            </ul>
            </div>
            );
    }
}

export default App;
