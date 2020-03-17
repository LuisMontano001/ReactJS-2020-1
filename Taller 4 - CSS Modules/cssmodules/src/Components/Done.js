import React,{useState} from 'react'
import style from './ToDo.module.css'
import Task from './Task.js'
const Done= ({done,doneToToDo}) => {
    return(
        <div className={style.mainDiv}>
            <div className={style.taskDiv}> 
            {done.map((task,index) => <Task  checked={true} key={task} index={index} move={doneToToDo} name={task}/>)}
                    
            </div>
        </div>
        
    );
}
export default Done
