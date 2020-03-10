import React, { Component } from 'react';
import styles from './toDo.module.css';

class ToDo extends Component {
    render() {
        const { completed, deleteToDo, id, text, toggleToDo } = this.props;
        return (
            <div className={styles.toDo}>
                <input id="checkbox" checked={completed} onChange={() => toggleToDo(id)} type="checkbox" />
                <label className={completed ? styles.completed : ''} htmlFor="checkbox">
                    {text}
                </label>
                <button className={styles.deleteButton} onClick={() => deleteToDo(id)}>
                    X
                </button>
            </div>
        );
    }
}

export default ToDo;
