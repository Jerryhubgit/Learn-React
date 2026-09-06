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

const init = (initialValue) => {
    console.log("init funciton called - this only runs once"); 

    const savedCount = localStorage.getItem("count")
    if(savedCount !== null){
        console.log("Found saved count: ", savedCount)
        return parseInt(savedCount)
    }

    console.log("No saved count, using initial value: ", initialValue)
    return initialValue

}
export const CounterWithInit = () => {
    const [currState, dispatch] = useReducer(reducer, initialState, init)

    return(
        <div>
            <h1>{currState}</h1>
            <button onClick={() => dispatch("decrease")}>decrease</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            <button onClick={() => dispatch("increase")}>increase</button>
        </div>
    )
}