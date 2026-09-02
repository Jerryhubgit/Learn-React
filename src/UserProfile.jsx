import { useState } from 'react'

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Samuel Felix", 
        age: 30, 
        email: "slymarmarlin@shots.com", 
        address: {
            city: "Lagos", 
            country: "Nigeria"
        }
    })

    const updateName = () => {
        setUser({
            ...user, name: "Benjamin Franklin", age: 45
        })
    }
    const increaseAge = () => { 
        setUser({
            ...user, age: user.age + 1
        })
    }

    const updateAddress = () => {
        setUser({
            ...user, address: { ...user.address, city: "Belgium" }
        })
    }
    
    return <div>
        <h2>UserProfile Component</h2>
        <h3>Name: {user.name}</h3>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
        <p>Country: {user.address.country}</p>
    
        <button onClick={updateName}>Update name</button>
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={updateAddress}>Update Address</button>
    </div>
}