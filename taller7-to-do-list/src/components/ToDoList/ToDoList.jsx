import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            toDoInput: '',
            toDoList: []
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
    };

    addToDo = () => {
        const { toDoInput, toDoList } = this.state;
        const toDoListCopy = [...toDoList];
        toDoListCopy.push({
            completed: false,
            id: toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 0,
            text: toDoInput
        });
        this.setState({ toDoInput: '', toDoList: toDoListCopy });
    };

    toggleToDo = id => {
        const toDoListCopy = [...this.state.toDoList];
        const toDo = toDoListCopy.find(toDo => toDo.id === id);
        toDo.completed = !toDo.completed;
        this.setState({ ...this.state, toDoList: toDoListCopy });
    };

    deleteToDo = id => {
        const toDoListCopy = [...this.state.toDoList];
        const toDoIndex = toDoListCopy.findIndex(toDo => toDo.id === id);
        if (toDoIndex !== -1) toDoListCopy.splice(toDoIndex, 1);
        this.setState({ ...this.state, toDoList: toDoListCopy });
    };

    render() {
        const { toDoInput, toDoList } = this.state;
        return (
            <>
                <input name="toDoInput" onChange={this.handleChange} type="text" value={toDoInput} />
                <button onClick={this.addToDo}>Add</button>
                {toDoList.map(toDo => (
                    <ToDo
                        completed={toDo.completed}
                        deleteToDo={this.deleteToDo}
                        id={toDo.id}
                        key={toDo.id}
                        text={toDo.text}
                        toggleToDo={this.toggleToDo}
                    />
                ))}
            </>
        );
    }
}

export default ToDoList;
