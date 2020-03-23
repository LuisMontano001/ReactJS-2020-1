import React, { Component } from 'react'
import MoviesList from './componentes/MoviesList/MoviesList'

import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount(){
    axios.get('./movies.json')
    .then(response => {
      const movies = response.data;

      this.setState({
        movies
      })
    })
  }

  render() {
    return (
      <div className="lol">
        <div className="title">
          <h1>Movies</h1>
        </div>
        
        <MoviesList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
