
import { useState } from 'react'

export const BatchingCounter = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)


    const handleClick = () => {
        setCount(count => {
            console.log(count)
            return count+1
        })
        setToggle(toggle => {
            console.log(toggle)
            return !toggle
        })
    }

    /**
        "rendered", 0, false
        "rendered", 1, true

    */

    console.log("Rendered", count, toggle)

    return(
        <div>
            <h2>Count: {count}</h2>
            <h2>Toggle: {toggle.toString()} </h2>
            <button onClick={handleClick}>Cilck me</button>
        </div>
    )
}