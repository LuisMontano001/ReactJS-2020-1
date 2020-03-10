import React from 'react';
import classes from './App.css';
import List from './List'

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

 deleteItem(key){
  const filteredItems = this.state.items.filter(item => item.key!==key);
  this.setState(
    {
      items:filteredItems
    }
  )
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

 handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key:Date.now()
    }
  })
}



render(){
  return (

    <div className={classes.listFrame}>
       <header>
         <form className={classes.form} onSubmit={this.addItem}>
           <h1 className={classes.titleText}>Datos Ordenados</h1>
           <input className={classes.entry} type="text" placeholder ="    Ingresa los datos"
           value={this.state.currentItem.text}
           onChange={this.handleInput}/>
           <button className={classes.add} type="submit">Añadir</button>
         </form>
        </header>
        <List items ={this.state.items}
        deleteItem ={this.deleteItem}></List>
     </div>

    );
  }
}

export default App;