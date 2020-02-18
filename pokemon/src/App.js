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
      <h1>Componente Header</h1>
      <Header></Header>
      <h1>Componente Tarjetas de pokemon</h1>
      <div className="content">
        <PokemonCardParent></PokemonCardParent>
      </div>
      <h1>Componente Comparación</h1>
      <Compare></Compare>
      <h1>Componente Historia</h1>
      <HistoryComponent title="Principio del universo"></HistoryComponent>
      <HistoryComponent title="Prehistoria"></HistoryComponent>
    </div>
  );
}

export default App;
