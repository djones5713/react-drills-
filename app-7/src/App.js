import React, { Component } from "react";
import NewTask from "./component/NewTask";
import List from "./component/List";

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  render(){
    return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={this.handleAddTask} />
      <List tasks={this.state.list} />
    </div>
    );
  }
}