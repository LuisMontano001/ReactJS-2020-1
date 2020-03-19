import React from 'react';
import axios from 'axios';
import classes from "./Personlist.css";

export default class PersonList extends React.Component {
    state = {
        persons: [],
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res);
                this.setState({ persons: res.data});
            });
    }

    render(){
        return(
            <ul className = {classes.card}>
                {this.state.persons.map(person => <li key={person.id}
                >{person.name} <ul className={classes.innerli}> <li>Website: {person.website}</li>
                <li>Company : {person.company.name}</li>
                <li>Email: {person.email}</li>
                <li>Phrase : {person.company.catchPhrase}</li></ul></li>)}
            </ul>
        )
    }
}