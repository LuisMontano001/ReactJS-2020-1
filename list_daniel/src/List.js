import React from 'react';
import classes from './List.css';

function List(props){
    const items = props.items;
    const List = items.map(item =>
        {
            return <div className={classes.listFrame} key={item.key}>
                <p >
                    <input type="checkbox" className={classes.buttonCheck}/>
                    <span className={classes.text}>{item.text}</span>
                        
                    <button className={classes.buttonDelete} onClick={ ()  => props.deleteItem(item.key)}>Eliminar</button>
                </p>
            </div>
        }
        )
    return(
    <div>{List}</div>
    )
}

export default List;