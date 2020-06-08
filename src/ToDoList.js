import React from "react"
import ToDoForm from "./ToDoForm"
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [{
                id: 1,
                text: "bla bla", 
                completed: false,
            }]
        }
    }

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    // displayToDos = () => {
    //         this.state.todos.map(todo => {
    //             return <h3>{todo.text}</h3>
    //         })
    // }

    render() {
        return (
            <div>
                <ToDoForm addTodo={this.addToDo} />
                <ToDoItem todos = {this.state.todos} />
            </div>
        )    
    }
}

export default ToDoList;