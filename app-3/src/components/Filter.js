import React, { Component } from 'react';

export default class Filter extends Component{
    constructor(props){
        super(props) 

        this.state = {
            food: [
                "spaghetti", 
                "ice cream", 
                "sushi", 
                "bologna", 
                "cheese"],
            filterFood: "",
        };
    }

    handleChange(filter){
        this.setState({ filterFood: filter });
    }
    

    render(){

        let foodsDisplay = this.state.food
            .filter((element, index) => {
                return element.includes(this.state.filterFood)
            })
            .map((element, index) => {
                return <h2 key={index}>{element}</h2>;
            });

        return (
            <div>
                <input className="inputLine" onChange={ e => this.handleChange(e.target.value) } type="text"></input>
                {foodsDisplay}
            </div>
        );
    }

};