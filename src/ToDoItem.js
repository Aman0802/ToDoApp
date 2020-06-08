import React from "react"

class ToDoItem extends React.Component {

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

    toggleSelection = (id) => {
        this.setState({
            todos: this.props.todos.map(todo => {
                if(id === todo.id){
                    console.log(todo);
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else {
                    return todo
                }
            })
        })        
    }

    render() {
        return (
            this.props.todos.map(todo => {
            return <h3 key={todo.id} style={{textDecoration: todo.completed? "line-through": ""}} onClick={() => this.toggleSelection(todo.id)}>{todo.text}</h3>
            })
        )
    }
}

export default ToDoItem