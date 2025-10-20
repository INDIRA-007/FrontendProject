// import React from "react";
import { Component } from "react";

// class Classcomp extends React.Component{

class Classcomp extends Component{

    //To access the state and props we need to use 'this' keyword
    //purpose of constructor is to initialize the state
    //purpose of super is to call the parent class constructor
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
    }
    //increment function
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    render()
    {
        return(
            <>
            <h1>This is a Class Component</h1>

            <h3>Count:{this.state.count}</h3>

            <button onClick={this.increment}>
                Increment
            </button>

            </>
            
        )
    }
}
export default Classcomp;