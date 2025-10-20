import React from 'react';

class MyComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {count: 0};
        console.log("Constructor: Component Created");
    }
    componentDidMount(){
        console.log("componentDidMount: Component Mounted");
        //Example: API calls, Event listeners
    }

    render()
    {
        console.log("Render: UI Rendered");
        return <h1>Hello</h1>;
    }
}


export default MyComponent;