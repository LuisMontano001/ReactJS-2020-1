import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import TodoMaker from '../TodoMaker/TodoMaker'
import './TodoList.css'

class TodoList extends Component {

    state = {
        todos: [
            {
                id: 1,
                content: "Do the dishes",
                date: "1/03/20",
                time: "1:30 PM",
                isDone: false
            },
            {
                id: 2,
                content: "Take a shower",
                date: "3/03/20",
                time: "9:00 AM",
                isDone: false
            },
            {
                id: 3,
                content: "Go out with friends",
                date: "7/03/20",
                time: "3:20 PM",
                isDone: false
            }
        ]
    }

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => id !== todo.id)
        })
    }

    checkMaxId = () => {
        var maxID = 0
        for(var todo of this.state.todos){
            if(todo.id > maxID){
                maxID = todo.id
            }
        }

        return maxID;
    }

    setIsDone = (id, isDone) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === id){
                    todo.isDone = isDone
                }
                return todo;
            })
        })
    }

    render() {
        return (
            <div className="TodoList--container">
                <div className="TodoList--title">
                    <h1 className="TodoList--title_text">TODOLIST</h1>
                </div>
                
                <TodoMaker addTodo={this.addTodo} 
                checkMaxId={this.checkMaxId}
                />
                {this.state.todos.map(
                    todo => <TodoItem key={todo.id}
                            id={todo.id}
                            content={todo.content}
                            date={todo.date}
                            time={todo.time}
                            isDone={todo.isDone}
                            deleteTodo={this.deleteTodo}
                            setIsDone={this.setIsDone}
                            />
                )}
            </div>
        )
    }
}

export default TodoList;
