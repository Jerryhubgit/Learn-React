import { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case "increment":
            return state + 1
        case "decrement": 
            return state - 1
        case "reset": 
            return initialState;
        default: 
            return state;
    }
}
export const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch(action){
                case "increment":
                    return state + 1
                case "decrement": 
                    return state - 1
                case "reset": 
                    return initialState;
                default: 
                    return state;
            }
        }
        , initialState)
    return(
        <div>
            <h2>{state}</h2>
            <button onClick={() => dispatch("decrement")}>decrement</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            <button onClick={() => dispatch("increment")}>increment</button>
        </div>
    )
}


/*
    - state 
    - dispatch(action)

*/