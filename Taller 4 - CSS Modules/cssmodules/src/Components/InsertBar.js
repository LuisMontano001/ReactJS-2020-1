import React from 'react';
class InsertBar extends React.Component {
    constructor(props){
        super(props);
        const {handleChange,handleClick}= props;
    }
    render() {
      return (
        <div id='insertBar'>
            <input type="text" placeholder="Insert a Task"  onChange={this.props.handleChange}/>
            <input type="button" value="Add" onClick={this.props.handleClick}/>
        </div>
      );
    }
  }
  export default InsertBar