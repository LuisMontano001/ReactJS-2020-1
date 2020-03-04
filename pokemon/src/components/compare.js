import React from 'react';
import '../App.css';
import PokemonCardParent from './pokemon-card-parent-two';
import logo from '../images/Pokemon-logo.png';
import PokemonCardParentTwo from './pokemon-card-parent-two';
import StatsPokemon from './stats'

export default class Compare extends React.Component{   
    render(){
        return(
            <div className="battle">
                <div>
                <select id="pokemon">
                    <option value="Bulbasaur">Bulbasaur</option>
                    <option value="Charmander">Charmander</option>
                    <option value="Squirtle">Squirtle</option>
                    <option value="Caterpie">Caterpie</option>
                </select>
                    <PokemonCardParentTwo></PokemonCardParentTwo>
                </div>
                    <StatsPokemon hp="35" ataque="15" defensa="43" ataques="30" defensas="50" velocidad="60" ></StatsPokemon>
                    <StatsPokemon hp="35" ataque="15" defensa="43" ataques="30" defensas="50" velocidad="60" ></StatsPokemon>
                <div>
                <select id="pokemon">
                    <option value="Bulbasaur">Bulbasaur</option>
                    <option value="Charmander">Charmander</option>
                    <option value="Squirtle">Squirtle</option>
                    <option value="Caterpie">Caterpie</option>
                </select>
                    <PokemonCardParentTwo></PokemonCardParentTwo>
                </div>
            </div>
            )
    }
}