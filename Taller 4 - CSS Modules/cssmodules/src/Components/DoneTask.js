import React from 'react';
class DoneTask extends React.Component   {
    constructor(props) {
        super(props);
        const {task,index,handleClick}= props;
    
    }
    render() {
      const aux= this.props.task
      return (  
      <div id={this.props.index} >
          <h4 className={aux[1]}>{aux[0]} </h4>
      </div>
      );
    }
}
export default DoneTask