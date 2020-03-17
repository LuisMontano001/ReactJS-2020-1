import React,{Component} from 'react';
import Task from './Task'
 class Todo extends Component{
     constructor(props){
         super(props);
         this.state={
             task:{
                text:'',
                done:false,
             },
            
             tasks:[]
        }
     }
handleChange=(e)=>{
    let value=e.target.value;
    this.setState({
        task:{
            text:value,
            done:false
        }
       

        
    })
}
handleClick=(e)=>{
    let task=this.state.task
    this.setState({
        tasks:[...this.state.tasks,task],
        task:{ 
            text:'',
            done:false
        }
    })
}
handleDone=(index)=>{
   var updatedTasks = [...this.state.tasks]
   var modifiedTask = updatedTasks.splice(index,1)
   modifiedTask[0].done = true
   updatedTasks[index] = {
       ...updatedTasks[index],
       ...modifiedTask[0]
   }
    this.setState({
        tasks: updatedTasks
    }
    )
   /* console.log(modifiedTask)
    console.log(updatedTasks)*/
}




     render(){
        return(
        <div>
        <input type="text" onChange={this.handleChange} value={this.state.task.text}></input>
        <button onClick={this.handleClick}>Add</button>
        
        {this.state.tasks?this.state.tasks.map((t1,index)=><Task task={t1} handleDone={this.handleDone}key={index} index={index}> </Task>):console.log("no hay tareas")}
        {console.log(this.state.tasks)}



            </div>);
        
     }
        
     
 }
export default Todo;
