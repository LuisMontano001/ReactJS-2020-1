import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import PokemonCardParent from './components/pokemon-card-parent';
import Compare from './components/compare';
import HistoryComponent from './components/history'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <PokemonCardParent></PokemonCardParent>
      </div>
      <Compare></Compare>
      <HistoryComponent title="Principio del universo"></HistoryComponent>
      <HistoryComponent title="Prehistoria"></HistoryComponent>
    </div>
  );
}

export default App;
