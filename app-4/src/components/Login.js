import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        };

        this.loginAccount = this.loginAccount.bind(this);
    }


    handleUserChange(userNameInput){
        this.setState({ username: userNameInput});

    }

    handlePasswordChange(passwordInput){
        this.setState({ password: passwordInput});
        
    }

    loginAccount(){
        return alert(`username: ${this.state.username} password: ${this.state.password}`);
    }


    render(){
        
    return (
        <div>
            <input onChange={ e => this.handleUserChange(e.target.value)}></input>
            <input onChange={ e => this.handlePasswordChange(e.target.value)}></input>
            <button onClick={ this.loginAccount}>Login</button>
        </div>
    );
    }
}