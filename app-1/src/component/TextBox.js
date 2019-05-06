import React, { Component } from 'react';

export default class TextBox extends Component {
    constructor(props){
        super(props)

        this.state = {
           text: ""
        }
    }

    handleChange(value){
        this.setState({
            text: value
        })
    }

    

    render(){
        return (
            <div className="TextBox">
                <input className="TextInput" onChange={ (e) => this.handleChange(e.target.value)}></input>
                    <div>{this.state.text}</div>
            </div>
        )

    }
}