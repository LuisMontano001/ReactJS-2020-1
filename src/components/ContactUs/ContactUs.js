import React, { Component } from 'react'
import Input from "../Input/Input";
import "./ContactUs.css";
export default class ContactUs extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        alert("Datos enviados " + this.state.name);
    }
    render() {
        return (
            <div className="form">
                <h1 className="formtitleBlue">Contactanos mediante este formulario</h1>
                <form onSubmit={this.onSubmit} >
                    <p>Por favor escribe tu nombre de contacto</p>
                    <Input content={this.state.name} onChange={this.onChange} name="name" type="name" />
                    <p>Por favor escribe tu email de contacto</p>
                    <Input content={this.state.email} onChange={this.onChange} name="email" type="email" />
                    <p>Por favor escribe tu numero de contacto</p>
                    <Input content={this.state.phone} onChange={this.onChange} name="phone" type="tel" />
                    <button type="submit " className="sendDataButton" >Enviar Datos</button>
                </form>
            </div>
        )
    }
}
