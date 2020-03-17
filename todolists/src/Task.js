import React,{Component} from 'react';
import { useImperativeHandle } from 'react/cjs/react.production.min';
import './Task.css'
var Task=(props)=>{     
    return (
        <div>
            
            {console.log(props)}
             <p className={props.task.done ? "completetask" : "incompletetask"}>{props.task.text} <button onClick={props.handleDone.bind(this, props.index)}>Done</button></p>
             
           
        </div>

    );
}
export default Task; 