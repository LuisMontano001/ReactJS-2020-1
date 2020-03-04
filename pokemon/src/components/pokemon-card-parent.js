import React from 'react';
import PokemonCardChild from './pokemon-card-child'
import '../App.css'
import bul from  '../images/001.png'
import char from '../images/004.png'
import squi from '../images/007.png'
import cate from '../images/010.png'
export default class PokemonCardParent extends React.Component{
    
    
    state = {
        pokemons: [
            {image:bul,id:'001',name:'Bulbasaur',weight:6.9,height:0.9},
            {image:char,id:'004',name:'Charmander',weight:8.5,height:0.6},
            {image:squi,id:'007',name:'Squirtle',weight:9.0,height:0.5},
            {image:cate,id:'010',name:'Caterpie',weight:2.9,height:0.3}
        ],
        
    }
    
    render(){
        return(
            this.state.pokemons.map(
                pokemon => <PokemonCardChild 
                id={pokemon.id} 
                image={pokemon.image} 
                name={pokemon.name}
                weight={pokemon.weight}
                height={pokemon.height} />

            )

        );
    }
}