import React from 'react';
var PokemonCardChild = props =>{
    return(
        <div className="pokemon-card">
                <img className="pokemon-card-image" src={props.image}></img>
                <div className="pokemon-card-info">
                    <p className="pokemon-card-id">{props.id}</p>
                    <h2 className="pokemon-card-title">{props.name}</h2>
                    <div className="pokemon-card-features">
                        <p>Peso: {props.weight}</p>
                        <p>Altura: {props.height}</p>                
                    </div>
                    <ul className="pokemon-card-type">
                        <li className="veneno">Veneno</li>
                        <li className="planta">Planta</li>
                    </ul>   
                </div>
            </div>
    );
}

export default PokemonCardChild;