import { useState } from "react"

export const Counter = () => {
    let [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }
    return <button style={{backgroundColor: count >= 10 && "green"}} onClick={handleClick}> Count: {count}</button>
}

export const LoginBtn = () => {
    const [login, setLogin] = useState(false)

    const handleLogin = () => {
        setLogin(!login)
    }
    return <button onClick={handleLogin}>{ login ? "login" : "logout" }</button>
}