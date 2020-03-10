import React from 'react';
class InsertBar extends React.Component {
    render() {
      return (
        <div id='insertBar'>
            <input type="text" placeholder="Insert a Task"/>
            <input type="date"/>
            <input type="button" onClick={handleChange}/>Add
        </div>
      );
    }
  }
  export default InsertBar