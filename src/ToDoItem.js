import React from "react"

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    

    render() {
        let todos = [];

        if(this.props.stateProp.toShow === 'all'){
            todos = this.props.stateProp.todos;
        } else if(this.props.stateProp.toShow === 'completed') {
            todos = this.props.stateProp.todos.filter(todo => todo.completed)
        } else if(this.props.stateProp.toShow === 'left') {
            todos = this.props.stateProp.todos.filter(todo => !todo.completed)
        }

        return (
            todos.map(todo => {
            return ( 
                <div style={{display: 'flex'}}>
                    <h3 
                        key={todo.id} 
                        style={{
                            textDecoration: todo.completed? "line-through": "",
                            color: todo.completed? "gray": ""
                        }} 
                        onClick={() => this.props.toggleSelection(todo.id)}
                    > 
                    {todo.text}
                    </h3>
                    <button onClick={() => this.props.deleteToDo(todo.id)}>X</button>
                </div>
            )
            })
        )
    }
}

export default ToDoItem