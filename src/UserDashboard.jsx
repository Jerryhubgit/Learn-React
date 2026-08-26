import { useState } from "react"

export const UserDashboard = ({ isPremium }) => {
   const [name, setName] = useState("jerry")
   const [age, setAge] = useState(20)
   const [color, setColor] = useState("red")   


   return(
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Color: {color}</h2>
            ______________________
        </div>
   )
}