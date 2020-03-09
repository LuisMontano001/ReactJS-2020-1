import React, { Component } from 'react'
import Todo from '../../Components/Todo/Todo';

export default class TodoList extends Component {

    render() {
        var list = this.props.todos.map((todo, index) => {
            return (
                <div key={index}>
                    {todo.done ? (<p>{todo.to}</p>) : (<p>{todo.to}</p>)}
                    <button onClick={() => { this.props.done(todo.id) }}>done</button>
                    <button onClick={() => { this.props.delete(todo.id) }}>delete</button>
                </div>
            );
        });
        return (
            <div>
                {list}
            </div>
        )
    }
}
