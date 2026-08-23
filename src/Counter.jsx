import { Component, useState } from "react"

export const Counter = () => {
    let [count, setCount] = useState(() => {
        console.log("initial state function called")
        return 0
    })

    console.log(`component rendered with: ${count}`)

    const handleClick = () => {
        setCount(++count)
    }
    return <button onClick={handleClick}>Count: {count}</button>
}