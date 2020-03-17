import React,{Component} from 'react';
import { useImperativeHandle } from 'react/cjs/react.production.min';
import './Task.css'
var Task=(props)=>{     
    return (
        <div>
            
            {console.log(props)}
             <p className={props.task.done ? "completetask" : "incompletetask"}>{props.task.text}</p>:
             <button onClick={props.handleDone.bind(this, props.index)}>Done</button>   
           
        </div>

    );
}
export default Task; 