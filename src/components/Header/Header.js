import React, { Component } from 'react'
import Logo from "../../Assets/img/Logo.png";
import "./Header.css";
export default class Header extends Component {
    render() {
        return (
            <div className="principal">
                <div className="center caption text-center blue">
                    <img src={Logo} className="Logo" />
                    <h1 class="title">Bienvenido a Legaplast</h1>
                    <h2 class="name">La mejor papeleria digital</h2>
                </div>
            </div>
        )
    }
}
