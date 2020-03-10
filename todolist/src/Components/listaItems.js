import React from 'react';
import styles from './listItems.module.css'

function ListaElementos(props){
    const items = props.items;
    const listaitems = items.map(item => 
        {
            return <div className={styles.list} key={item.key}>
                <p>{item.text}</p>
            </div>
        })
    return (
    <div className={styles.listContainer}>{listaitems}</div>
    )
}
export default ListaElementos;