import React,{useState} from 'react';
import './App.css';
import Done from './Components/Done'
import ToDo from './Components/ToDo'
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar.js'
const App= () =>{
  const [toDo,setToDo]= useState(["tarea"])
  const [done,setDone]= useState(["defecto"])
  const [trashCan,setTrashCan]= useState([])
  const toDoToDone=(index)=>{
    setDone(prevState=>([...prevState,toDo.splice(index,1)]))
  }
  const doneToToDo=(index)=>{
    setToDo(prevState=>([...prevState,done.splice(index,1)]))
  }
    return (
      <div className="App">
        <Router>
        <NavBar></NavBar>
          <Switch>
            <Route path="/done">
                <Done doneToToDo={doneToToDo} done={done} setDone={setDone}></Done>
            </Route>
            <Route path="/">
                <ToDo toDoToDone={toDoToDone} toDo={toDo} setToDo={setToDo}></ToDo>
            </Route>
          </Switch>
        </Router>
       
      </div>
      
    );
  
  
}

export default App;
