import React, { Component } from 'react'
import "./BodyPage.css";
import Product from "../Product/Product"
export default class BodyPage extends Component {
    state= {
        products:[
            {name: 'Carpeta legajadora', description: 'Carpeta legajadora oficio', picture: require('../../Assets/img/Carpeta.jpg')},
            {name: 'Gancho Legajador', description: 'Gancho legajador 10mm', picture: require('../../Assets/img/Gancho.jpg')},
            
        ]
    }
    render() {
        return (
            <div className="mainContainer">
                <div className="pageContent">
                        <div>
                        <h2 className="subtitle">PRODUCTOS EN INVENTARIO</h2>
                            {this.state.products.map((p,index)=>
                            
                            <Product props={p} key={index}></Product>
                        
                            )}
                        </div>
                    <div className="inventoryContainer">
                       
                        
                    </div>
                </div>
            </div>
        )
    }
}
