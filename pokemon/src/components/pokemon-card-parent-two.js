import React from 'react';
import PokemonCardChild from './pokemon-card-child'
import '../App.css'
import bul from  '../images/001.png'
import char from '../images/004.png'
import squi from '../images/007.png'
import cate from '../images/010.png'
export default class PokemonCardParentTwo extends React.Component{
    
    
    state = {
        vs:[
            {image:bul,id:'001',name:'Bulbasaur',weight:6.9,height:0.9},
        ]

    }
    
    render(){
        return(
            this.state.vs.map(
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