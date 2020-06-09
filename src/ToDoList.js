import React from "react"
import ToDoForm from "./ToDoForm"
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            toShow: 'all',
            toggleAll: false
        }
    }

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleSelection = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(id === todo.id){
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    }
                }
                else {
                    return todo
                }
            })
        })        
    }

    updateToShowState = (status) => {
        this.setState({toShow: status})
    }

    deleteToDo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleChange = () => {
        this.setState({
            todos: this.state.todos.map(todo => {
                return {
                    ...todo,
                    completed: !this.state.toggleAll,
                }
            }),
            toggleAll: !this.state.toggleAll
        })
    }

    render() {
        return (
            <div>
                <ToDoForm addTodo={this.addToDo} />
                
                <div>Number of tasks left: {this.state.todos.filter(todo => {
                    return !todo.completed
                }).length}</div>

                <button onClick={() => this.updateToShowState('all')}>All</button>
                <button onClick={() => this.updateToShowState('completed')}>Completed</button>
                <button onClick={() => this.updateToShowState('left')}>To be done</button> <br/>

                {this.state.todos.length?<button onClick={this.toggleChange}>{this.state.toggleAll? "Unmark All" : "Mark All"}</button>:null}
                
                <ToDoItem stateProp = {this.state} toggleSelection={this.toggleSelection} deleteToDo={this.deleteToDo} />
            </div>
        )    
    }
}

export default ToDoList;