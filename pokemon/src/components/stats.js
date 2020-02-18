import React from 'react';
var StatsPokemon = props =>{
    return(
        <div className="values">
        <p>Hp:{props.hp}</p>
        <p>Ataque: {props.ataque}</p>
        <p>Defensa: {props.defensa}</p>
        <p>Ataque especial: {props.ataques}</p>
        <p>Defensa especial: {props.defensas}</p>
        <p>Velocidad: {props.velocidad}</p>
    </div>
    );
}

export default StatsPokemon;