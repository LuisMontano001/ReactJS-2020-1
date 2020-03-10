import React from 'react';
import classes from './ListV.css';

function ListV(props){
    const items = props.items;
    const ToDoList = items.map(item =>
        {
            return <div className={classes.list} key={item.key}>
                <span className={classes.card}>
                    <input type="checkbox" className={classes.check}/>
                    <span className={classes.text}>{item.text}</span>
                        
                    <button className={classes.delete} onClick={ ()  => props.deleteItem(item.key)}>Delete</button>
                </span>
            </div>
        }
        )
    return(
    <div>{ToDoList}</div>
    )
}

export default ListV;