import { useState } from "react"

export const SimpleCounter = () => {
    const [count , setCount] = useState(0); 
    console.log(`Render count as: ${count}`) 


    const handleClick = () => {
        setCount(count+1)   
        console.log(`After: ${count}`)   
        setCount(count+3)   
        console.log(`After: ${count}`)   
        setCount(count+4)   
        console.log(`After: ${count}`)   
    }
    return (
        <div>
            <h2>Count: {count}</h2> 
            <button onClick={handleClick}>increment</button>
            {console.log(count)}
        </div>
        
    )
}