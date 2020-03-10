import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            taskList: []
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
    };

    addTask = () => {
        const { input, taskList } = this.state;
        const taskListCopy = [...taskList];
        taskListCopy.push({
            completed: false,
            id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0,
            text: input
        });
        this.setState({ input: '', taskList: taskListCopy });
    };

    toggleTask = id => {
        const taskListCopy = [...this.state.taskList];
        const task = taskListCopy.find(task => task.id === id);
        task.completed = !task.completed;
        this.setState({ ...this.state, taskList: taskListCopy });
    };

    deleteTask = id => {
        const taskListCopy = [...this.state.taskList];
        const taskIndex = taskListCopy.findIndex(task => task.id === id);
        if (taskIndex !== -1) taskListCopy.splice(taskIndex, 1);
        this.setState({ ...this.state, taskList: taskListCopy });
    };

    render() {
        const { input, taskList } = this.state;
        return (
            <div>
                <input
                    name="input"
                    onChange={this.handleChange}
                    type="text"
                    style={{ marginRight: '1rem' }}
                    value={input}
                />
                <button onClick={this.addTask}>Add new task</button>
                {taskList.map(task => (
                    <Task
                        completed={task.completed}
                        deleteTask={this.deleteTask}
                        id={task.id}
                        key={task.id}
                        text={task.text}
                        toggleTask={this.toggleTask}
                    />
                ))}
            </div>
        );
    }
}

export default TaskList;
