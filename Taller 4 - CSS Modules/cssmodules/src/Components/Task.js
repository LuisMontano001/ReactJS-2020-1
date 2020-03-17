import React from 'react'
import style from './Task.module.css'
const Task=({name,move,index,checked})=>(
        <div className={style.taskDiv}>
            <h4 className={style.header}>{name}</h4>
            <input type="checkbox" checked={checked} onChange={()=>move(index)}/>
        </div>  
    );
export default Task