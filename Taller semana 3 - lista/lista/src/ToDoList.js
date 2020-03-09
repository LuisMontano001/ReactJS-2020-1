import React from 'react';
import classes from './ToDoList.css';

function ToDoList(props){
    const items = props.items;
    const ToDoList = items.map(item =>
        {
            return <div className={classes.list} key={item.key}>
                <p>
                <span>
                    <input type="checkbox"/>
                </span>
                &nbsp;
                    {item.text}
                &nbsp;    
                <span>
                    <button className={classes.delete} onClick={ ()  => props.deleteItem(item.key)}>Eliminar</button>
                </span>
                </p>

            </div>
        }
        )
    return(
    <div>{ToDoList}</div>
    )
}

export default ToDoList;