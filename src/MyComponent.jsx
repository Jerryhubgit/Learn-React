import { useState } from 'react'

function MyComponent(){
    const foodsList = ['apple', 'orange', 'pawpaw', 'cigarette', 'risla']
    const [foods, setFood] = useState(foodsList)
    const addFood = () => {
        let newFood = document.getElementById('foodInput').value
        setFood([...foods,  newFood])
        document.getElementById('foodInput').value = ""
    }

    const deleteFood = (index) => {
        setFood(foods.filter((_, i) => i !== index))
    }
    
    const newArray = foods.map((food, index) => <li key={index} onClick={() => deleteFood(index)}>{food}</li>)
    return (
        <div>
            <h1>List of food</h1>
            <ul>
                {newArray}
            </ul>
            <input type="text" id="foodInput" />
            <button onClick={() => addFood()}>Enter food</button>
        </div>
    )
}

export default MyComponent