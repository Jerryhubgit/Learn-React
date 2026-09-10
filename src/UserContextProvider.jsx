import { UserContext } from "./UserContext" 
import { useState } from 'react' 


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Bruce wayne", 
        theme: "dark"
    })
    return <UserContext value={{ user, setUser }}> { children }</UserContext>
}