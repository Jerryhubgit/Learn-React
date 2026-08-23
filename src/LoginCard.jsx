import {useState } from "react"

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState()
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <>
            <div>
                <h2>{!message ? "Text displays Here" : message}</h2>
                <input type="text" placeholder="Enter your message..."  onChange={handleChange}/>
            </div>
            <button onClick={handleClick}>{isLoggedIn ? "Logout" : "login"}</button>
        </>
    )

}