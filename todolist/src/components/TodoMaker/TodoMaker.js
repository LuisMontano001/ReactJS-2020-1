import React, { Component } from 'react'
import './TodoMaker.css'

class TodoMaker extends Component {

    state = {
        todo: {
            id: 0,
            content: "",
            date: "",
            time: "",
            isDone: false
        }
    }

    handleChange = (event) => {
        this.setState({ todo: 
            {...this.state.todo,
            [event.target.name]: event.target.value,
            isDone: false
        }}, /*() => console.log(this.state.todo)*/);
    }

    checkId = (maxId) => {
        this.setState({ todo: 
            {...this.state.todo,
            id: maxId + 1
        }});
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        await this.checkId(this.props.checkMaxId());
        this.props.addTodo(this.state.todo);
    }

    render() {
        return (
            <div className="TodoMaker--container">
                <form onSubmit={this.handleSubmit}>
                    <div className="TodoMaker--label">
                        <h3 className="TodoMaker--label_text">Add Todo : </h3>
                    </div>
                    <input className="Input--textdate"
                        type="text"
                        name="date"
                        value={this.state.todo.date} 
                        onChange={this.handleChange} />
                    <input className="Input--texttime"
                        type="text"
                        name="time" 
                        value={this.state.todo.time} 
                        onChange={this.handleChange} />
                    <input className="Input--textfield"
                        type="text" 
                        name="content"
                        value={this.state.content} 
                        onChange={this.handleChange} />
                    <input className="Input--submit"
                        type="submit" 
                        value="+" />
                </form>
            </div>
        )
    }
}

export default TodoMaker;