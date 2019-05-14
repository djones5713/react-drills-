import React, { Component } from "react";

export default class TodoList extends Component {
render() {
    return (
      <div className="App">
      {this.props.list}
       
      </div>
    );
  }
}