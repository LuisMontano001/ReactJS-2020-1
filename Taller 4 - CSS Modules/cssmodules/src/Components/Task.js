import React from 'react';
import classes from './App.css';
class Task extends React.Component   {
    constructor(props) {
        super(props);
        const {task,index,handleClick}= props;
    
    }
    

    render() {
      const aux= this.props.task
      return (  
      <div id={this.props.index} >
          <h4 className={aux[1]}>{aux[0]} </h4>
          <input type="button"  value="done" onClick={this.props.handleClick}/>
      </div>
      );
    }
}
export default Task