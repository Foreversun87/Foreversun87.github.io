//FunctionalProgramming
import React, {useState} from "react";
export default function CounterHooks() {
    // 1. params: the piece of state
    // 2. params: function to update that  piece of state
    const [count, setCount] = useState("Ich hasse das!")
    return (
        <div>
            <h1>The Count is: {count}</h1>
            <button onClick={() => setCount(count + 1)} >Add 1</button>
        </div>
    )
}

//ClassProgramming
import React from "react";
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: "Ich hasse das!"
        }
    }
    render(){
        return(
            <div>
                <h1>The count is: {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.count + 1})}>Add 1</button>
            </div>
        )
    }
}