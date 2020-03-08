import React, { Component } from 'react'
import './TodoItem.css'
import Radium from 'radium';

class TodoItem extends Component {

    state = {
        
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.setIsDone(this.props.id, !this.props.isDone);
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteTodo(this.props.id);
    }

    getDetails = () => {
        var styles = this.props.isDone ? {
            textDecoration: "line-through",
        }:{
            textDecoration: "none",
        };

        return styles;
    }

    getStyle = () => {
        var styles = this.props.isDone ? {
            backgroundColor: "green",
            color: "white",
            ":active":{
                color: "white",
                backgroundColor: "red"
            }
        }:{
            backgroundColor: "red",
            color: "white",
            ":active":{
                color: "white",
                backgroundColor: "green"
            }
        };

        return styles;
    }

    render() {
        return (
            <div className="TodoItem--container">
                <form onSubmit={this.handleDelete}>
                    <input className="Input--button"
                        type="submit" 
                        value="X" />
                    <div className="TodoItem--textdate" style={this.getDetails()}>
                        <h5 className="TodoItem--text_primary">{this.props.date}</h5>
                    </div>

                    <div className="TodoItem--texttime" style={this.getDetails()}>
                        <h5 className="TodoItem--text_primary">{this.props.time}</h5>
                    </div>

                    <div className="TodoItem--textspace" style={this.getDetails()}>
                        <h5 className="TodoItem--text_primary">{this.props.content}</h5>
                    </div>

                    <input className="Input--button" style={this.getStyle()}
                        value="&#10003;"
                        type="button"  
                        onClick={this.onClick}/>
                </form>
            </div>
        )
    }
}

export default Radium(TodoItem);
