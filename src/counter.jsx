import { useState } from 'react'
import './Counter.css'

function Counter(){

    let [digit, setDigit] = useState(0)
    const increment = () => {
        setDigit(++digit)
    }
    const reset = () => {
        setDigit(0)
    }
    const decrement = () => {
        setDigit(--digit)
    }
    return (
        <div className='counterContainer'>
            <h1>{digit}</h1>
            <div className="buttons">
                <button onClick={decrement}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increase</button>
            </div>
        </div>
    )
}

export default Counter