import React, { Component } from 'react'
import companyPic from "../../Assets/img/CompanyLogo.png";
import "./Header.css";
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="topVar">
                    <img src={companyPic} className="companyPic" />
                    <h1 className="title">LEGAPLAST</h1>
                </div>
            </div>
        )
    }
}
