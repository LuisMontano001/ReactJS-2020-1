import React from 'react'
import './InfoBox.css'

var InfoBox = (props) => {
    return (
        <div className="box">
            <p>
                Director: {props.director}<br/>
                Category: {props.category}<br/>
                Year: {props.year}<br/>
                Title: {props.title}<br/>
                ID: {props.movieID}
            </p>
        </div>
    )
}

export default InfoBox;
