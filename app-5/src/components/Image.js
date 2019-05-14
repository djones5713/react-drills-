import React, { Component } from "react";


export default class Image extends Component {
    render(){
    return (
    <div>
    <img src={this.props.url} />
    <caption>409 Conflict</caption>
    </div>
    )
  }
}
  
