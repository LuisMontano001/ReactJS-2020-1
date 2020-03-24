import React, { Component } from 'react';
import PhoneList from './Components/PhoneList';
import { Card } from 'reactstrap';
import { ListGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <PhoneList />        
      </div>
    )
  }
}

export default App;
