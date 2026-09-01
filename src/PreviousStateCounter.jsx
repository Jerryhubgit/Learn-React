import { useState } from "react"

export const PreviousStateCounter = () => {
    const [count , setCount] = useState(0); 
    console.log(`Render count as: ${count}`) 


    const handleClick = () => {
        setCount((prev) => {
            console.log(`After: ${prev}`)  
            return prev+1 
        })   
        setCount((prev) => {
            console.log(`After: ${prev}`)   
            return prev+3
        })   
        setCount((prev) => {
            console.log(`After: ${prev}`)   
            return prev+4
        })   
    }
    return (
        <div>
            <h2>Batch Count: {count}</h2> 
            <button onClick={handleClick}>increment</button>
            {console.log(count)}
        </div>
        
    )
}