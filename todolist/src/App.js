import React from 'react';
import styles from './App.module.css';
import ListaElementos from './Components/listaItems'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      itemActual:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      itemActual:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const nuevoItem = this.state.itemActual;
    if(nuevoItem!==""){
      const nuevosItems = [...this.state.items, nuevoItem];
      this.setState({
        items:nuevosItems,
        itemActual:{
          text:'',
          key:''
        }
      })
    }
  }

  render(){
    return (
      <div className={styles.App}>
        <div className={styles.form}>
          <form id="todoilst-form" onSubmit={this.addItem}>
            <input type="text"
            placeholder="Añadir elemento" 
            value={this.state.itemActual.text} 
            onChange={this.handleInput}
            ></input>
            <button type="submit">Nueva tarea</button>
          </form>
        </div>
        <ListaElementos items={this.state.items}></ListaElementos>
      </div>
    );
  }
  
}

export default App;
