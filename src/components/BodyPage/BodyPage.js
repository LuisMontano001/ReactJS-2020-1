import React, { Component } from 'react'
import "./BodyPage.css";
import Product from "../../Assets/img/CarpetaGancho.jpg";
export default class BodyPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="block">
                    <div class="Inventory">
                        <h2 className="subtitle">Productos en inventario</h2>
                        <p className="text-justify">
                            <ul>
                                <li>
                                    Gancho legajador 13 cm
                        </li>
                                <li>
                                    Gancho legajador 18 cm
                        </li>
                                <li>
                                    Carpetas plastificadas tamaño carta
                        </li>

                            </ul>
                        </p>
                    </div>
                </div>
                <div className="block">
                    <img src={Product} className="image" />
                </div>
            </div>
        )
    }
}
