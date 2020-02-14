import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonCard from './components/pokemon-card-child';
import PokemonCardParent from './components/pokemon-card-parent';

function App() {
  return (
    <div className="App">
      <PokemonCardParent></PokemonCardParent>
    </div>
  );
}

export default App;
