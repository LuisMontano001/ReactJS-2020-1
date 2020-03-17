import React,{useState} from 'react'
import style from './ToDo.module.css'
import Task from './Task.js'
const ToDo= ({toDo,setToDo,toDoToDone}) => {
    const [nueva,setNueva]= useState("")
    return(
        <div className={style.mainDiv}>
            <div className={style.addDiv}>
                <input type="text" value={nueva} onChange={value=>setNueva(value.target.value)} placeholder="Task..."/>
                <button onClick={()=>setToDo(prevState=>([...prevState,nueva]))}>Add</button>
            </div>
            <div className={style.taskDiv}> 
            {toDo.map((task,index) => <Task checked={false} key={task} index={index} move={toDoToDone} name={task}/>)}      
            </div>
        </div>
        
    );
}
export default ToDo
