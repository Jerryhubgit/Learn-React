import { useReducer } from 'react'

let initialState = 0;
const reducer = (currState, action) => {
    switch(action){
        case "decrease":
            return currState - 1
        case "increase": 
            return currState + 1
        case "reset": 
            return initialState
        default: 
            return currState
    }
}

export const CounterWithReducer = () => {
    const [currState, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <h1>{currState}</h1>
            <button onClick={() => dispatch("decrease")}>decrease</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            <button onClick={() => dispatch("increase")}>increase</button>
        </div>
    )
}