import React, { Component } from 'react';
import styles from './List.css';

class List extends Component {
    state = {
        posts: [],
        cargando: true
      }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => this.setState({posts, cargando: false}))
        .catch(error => {
            // Error
          })
    }

    render() {
        return (
            <div>
            <h1>Taller semana 9 - HTTP </h1>
            <h1>Posts</h1>
            <ul>
                {this.state.posts.map(posts =>(
                    <li key={posts.id}>
                        <p>Titulo:</p>
                        {posts.title}
                        <p>Contenido:</p>
                        {posts.body}
                    </li>
                ))}
            </ul>
            </div>
    );}
}

export default List;