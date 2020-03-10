import React from 'react';
import './App.css';
import InsertBar from './Components/InsertBar';
import Task from './Components/Task';
state={
  tasks=[

  ]
}
handleChange(newTask)=>{
  this.setState({tasks: tasks+newTask})
}
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div id='mainDiv'>
          <InsertBar/>
          this.state.tasks.map((name,date,index)=> <Task name={name} date={date} key={index}/>)
        </div>
      </header>
    </div>
  );
}

export default App;
