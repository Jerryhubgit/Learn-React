import { useContext } from 'react'
import { UserContext } from './UserContext'

export const Avatar = () => {
    const { user, setUser} = useContext(UserContext)
    
    const handleToggle = () => {
        setUser({
            ...user, 
            theme: user.theme === "dark" ? "light" : "dark"
        })
    }
    return (
        <div>

            <p>Hello {user.name} </p>
            <p>Theme: {user.theme}</p>
            <button onClick={handleToggle}>Toggle</button>
        </div>
        
    )
}