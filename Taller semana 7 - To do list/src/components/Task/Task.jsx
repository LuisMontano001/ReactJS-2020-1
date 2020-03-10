import React, { Component } from 'react';
import styles from './task.module.css';

class Task extends Component {
    render() {
        const { completed, deleteTask, id, text, toggleTask } = this.props;
        return (
            <div className={styles.task}>
                <input id="checkbox" checked={completed} onChange={() => toggleTask(id)} type="checkbox" />
                <label className={completed ? styles.taskCompleted : ''} htmlFor="checkbox">
                    {text}
                </label>
                <button className={styles.deleteButton} onClick={() => deleteTask(id)}>
                    Delete task
                </button>
            </div>
        );
    }
}

export default Task;
