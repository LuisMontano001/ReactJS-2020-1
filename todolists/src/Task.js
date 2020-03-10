import React,{Component} from 'react';
import { useImperativeHandle } from 'react/cjs/react.production.min';
import './Task.css'
var Task=(props)=>{
    const {task}=props
  var  handleDone=(e)=>{
        task.done=true


    }
    var Complete=()=>{
        let name="completetask"
        if(!task.done){
            name="incompletetask"
        }
        else{name="completetask"}
        return(<div><p className={name}>{task.text}</p></div>)
    }
     
    return (
<div>
   { 
    task.done?<p className="completetask">{task.text}</p>:<p className="incompletetask">{task.text}</p>
        }
        <button onClick={handleDone}>Done</button>   
 
</div>

    );
}
export default Task;