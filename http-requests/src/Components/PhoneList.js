import React, { Component } from 'react'
import PostData from '../data/phones.json'
import { Card } from 'reactstrap';
import { ListGroup } from 'reactstrap';
class PhoneList extends Component {
    render(){
        return(
            <div className="justify-content-md-center text-center col card" styles="width: 18rem;">
                <ul className="list-group list-group-flush">
                   {PostData.map((postDetail, index)=>{
                   return <li className="list-group-item">{postDetail.Name}</li>
                   })}
                </ul>
            </div>
        )
    }
}

export default PhoneList