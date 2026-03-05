import { useState } from 'react'

function MyComponent(){
    const foodsList = ['apple', 'orange', 'pawpaw', 'cigarette', 'risla']
    const [foods, setFood] = useState()
    const addFood = () => {
        let newFood = document.getElementById('foodInput').value
        setFood([...foodsList,  newFood])
    }
    
    const newArray = foodsList.map((food, index) => <li key={index}>{food}</li>)
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