import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import PokemonCardParent from './components/pokemon-card-parent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <PokemonCardParent></PokemonCardParent>
      </div>
      
    </div>
  );
}

export default App;
