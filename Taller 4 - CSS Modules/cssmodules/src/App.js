import React from 'react';
import './App.css';
import classes from './Components/App.css';
import InsertBar from './Components/InsertBar';
import Task from './Components/Task';
import DoneTask from './Components/DoneTask';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      tasks:[],
      doneTasks:[],
      newTask:[]
    }
  }
  handleChange=(e)=>{
    var value=e.target.value;
    this.setState({newTask:[value,"unDone"]})
  }
  handleClick=(e)=>{
    var newTask = this.state.newTask
    this.setState({tasks:[...this.state.tasks, newTask]})
  }
  handleClick2=(e)=>{
    var doneTask= [this.state.newTask[0],"done"]
    this.setState({doneTasks:[...this.state.doneTasks, doneTask]})
    console.log(doneTask)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div id='mainDiv'>
            <InsertBar handleChange={this.handleChange} handleClick={this.handleClick} />  
            <div className="columns"> 
              <h2>Tasks</h2>
              {this.state.tasks.map((task, index)=><Task task={task} key={index} handleClick={this.handleClick2} />)}
            </div>
            <div className="columns">
              <h2>Done</h2>
              {this.state.doneTasks.map((task, index)=><DoneTask task={task} key={index} handleClick={this.handleClick2} />)}
            </div>
          </div>
        </header>
      </div>
    );
  }
  
}
export default App;
