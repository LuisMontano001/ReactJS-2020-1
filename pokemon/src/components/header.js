import React from 'react';
import '../App.css'
import logo from '../images/Pokemon-logo.png'

export default class Header extends React.Component{
    
    
    
    render(){
        return(
            <header className="header">
                <div className="header-logo">
                    <img src={logo} ></img>
                </div>
                <ul className="header-navbar">
                    <li>
                        <a href="#">Pokedex</a>
                    </li>
                    <li>
                        <a href="#">Pokedex</a>
                    </li>
                    <li>
                        <a href="#">Pokedex</a>
                    </li>
                    <li>
                        <a href="#">Pokedex</a>
                    </li>
                </ul>
            </header>
            )
    }
}