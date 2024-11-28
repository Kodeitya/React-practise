import React, { Component } from "react";

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor: Component initialized.");
    }

    componentDidMount() {
        console.log("componentDidMount: Component mounted.");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: Component updated.");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: Component will be removed.");
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log("Render: Component rendering.");
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default LifeCycleDemo;
