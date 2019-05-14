import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor(){
    super() 
        this.state = {
            userInput: ""
        }
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleAddTask(value){
      this.setState({userInput: value});
    }

    handleAdd(){
        this.props.add(this.state.input);
        this.setState({userInput: ""})

    }

    render(){
        return (
            <div>
            <h2>My to-do-list:</h2>
            value={this.state.userInput}
            <input onChange={e => this.handleAddTask(e.target.value)}placeholder="Enter new task" />
            <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

