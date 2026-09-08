import { useReducer } from "react"



export const CounterWithInit = () => {
    const initialCount = 0

     const reducer = (state, action) => {
        switch(action){
            case "increase": 
                return state + 1
            case "decrease": 
                return state - 1
            case "reset": 
                return initialCount
            default: 
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialCount)

    console.log(initialCount)
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch("decrease")}>decrease</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            <button onClick={() => dispatch("increase")}>increase</button>
        </div>
    )
}