
import MyComponent from './MyComponent.jsx'
import Counter from './counter.jsx'
import './App.css'
import { useState } from 'react'

function App(){

    let [digit, setDigit] = useState(0);

    const decrement = () => {
        setDigit(--digit)
        console.log(digit)
    }
    const reset = () => {
        digit = 0 
        setDigit(digit)
        console.log(digit)
    }
    const increment = () => {
        setDigit(++digit)
        console.log(digit)
    }

    return (
        <>  
            <h1 className='display'>{digit}</h1>
            <div className="buttons">
                <Counter name='decrease' action={decrement}/>
                <Counter name="reset" action={reset}/>
                <Counter name='increase' action={increment}/>
            </div>
        </>
    )
}


export default App