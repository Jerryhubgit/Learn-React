import { useState } from "react"

export const LoginCard = () => {
    let [ text, setText ] = useState(); 

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h2>{text}</h2>
            <input onChange={handleChange} type="text" placeholder="Enter your text"/>
        </div>
    )
}