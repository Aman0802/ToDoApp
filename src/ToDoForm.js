import React from "react"
import shortid from 'shortid'

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({
            id: shortid.generate(),
            text: this.state.text, 
            completed: false,
        })
        this.setState({
            text: ""
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} name="text" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default ToDoForm;