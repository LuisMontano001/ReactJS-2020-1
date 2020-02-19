import React, { Component } from 'react'
import "./Product.css"
class Product extends Component { 
    constructor(props){
        super(props);
    }
    
    render() { 
            return ( 
            <div className="item">
               <div className="itemContent">
                    <h4>{this.props.props.name}</h4>
                    <h5>{this.props.props.description}</h5> 
                    <img src={this.props.props.picture}></img>
               </div>
                    

            </div> );
         } 
}
export default Product;