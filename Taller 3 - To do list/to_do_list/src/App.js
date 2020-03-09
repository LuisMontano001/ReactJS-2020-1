import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import ToDoList from './ToDoList'

class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     items:[],
     currentItem:{
       text: '',
       key: '',
     }
   }
   this.handleInput = this.handleInput.bind(this);
   this.addItem = this.addItem.bind(this);
   this.deleteItem = this.deleteItem.bind(this);
 }

 handleInput(e){
   this.setState({
     currentItem:{
       text: e.target.value,
       key:Date.now()
     }
   })
 }

 addItem(e){
   e.preventDefault();
   const newItem = this.state.currentItem;
   console.log(newItem);
  
   if(newItem.text!==""){
     const newItems=[...this.state.items, newItem];
     this.setState({
       items:newItems,
       currentItem:{
         text:'',
         key:''
       }
     })
   }
 }

deleteItem(key){
  const filteredItems = this.state.items.filter(item => item.key!==key);
  this.setState(
    {
      items:filteredItems
    }
  )
}

render(){
  return (

    <div className={classes.todolist}>
       <header>
         <form className={classes.form} onSubmit={this.addItem}>
           <h1 className={classes.title}>To do List</h1>
           <input className={classes.input} type="text" placeholder ="Ingresa la tarea"
           value={this.state.currentItem.text}
           onChange={this.handleInput}/>
           <button className={classes.submit} type="submit">Añadir Tarea</button>
         </form>
        </header>
        <ToDoList items ={this.state.items}
        deleteItem ={this.deleteItem}></ToDoList>
     </div>

    );
  }
}

export default App;
