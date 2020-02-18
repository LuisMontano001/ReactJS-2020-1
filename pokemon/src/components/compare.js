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
                    <PokemonCardParentTwo></PokemonCardParentTwo>
                </div>
                    <StatsPokemon hp="35" ataque="15" defensa="43" ataques="30" defensas="50" velocidad="60" ></StatsPokemon>
                    <StatsPokemon hp="35" ataque="15" defensa="43" ataques="30" defensas="50" velocidad="60" ></StatsPokemon>
                <div>
                    <PokemonCardParentTwo></PokemonCardParentTwo>
                </div>
            </div>
            )
    }
}