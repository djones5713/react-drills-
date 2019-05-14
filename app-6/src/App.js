import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  constructor(){
    super(); 

    this.state = {
        userInput: "",
        list:[]
    };  

    this.addList = this.addList.bind(this)
}

handleChange(value){
    this.setState({ userInput: value})
}

addList(){
    this.setState({
        list: [...this.state.list,this.state.userInput],
        userInput: ""
    });
 
}

render(){
  let mapped = this.state.list.map(listItem => {
    return (<div>
       <TodoList 
        list={listItem}/>
      
      </div>)
  }) 
  
  
    return (
        <div>
            <h2>My to-do list:</h2>
            <input value={this.state.input}
            placeholder="Enter new task"
            onChange={ e => this.handleChange(e.target.value) } /
            >
            <button onClick={ this.addList}>Add</button>
            {mapped}
        </div>
      
       
    )
}
}

export default App;
