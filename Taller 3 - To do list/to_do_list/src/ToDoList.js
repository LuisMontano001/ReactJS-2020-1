import React from 'react';
import classes from './ToDoList.css';

function ToDoList(props){
    const items = props.items;
    const ToDoList = items.map(item =>
        {
            return <div className={classes.list} key={item.key}>
                <p >
                    <input type="checkbox" className={classes.check}/>
                    <span className={classes.text}>{item.text}</span>
                        
                    <button className={classes.delete} onClick={ ()  => props.deleteItem(item.key)}>Eliminar</button>
                </p>
            </div>
        }
        )
    return(
    <div>{ToDoList}</div>
    )
}

export default ToDoList;