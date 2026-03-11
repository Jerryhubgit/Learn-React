import { useState } from 'react'

function MyComponent(){
    
    const carsList = ["mercedes", "toyota", "Ferrari", "BMW"]
    const [cars, setCar] = useState(carsList)
    
    const addCar = () => {
        const newCar = document.getElementById('input').value;
        setCar([...cars, newCar])

        document.getElementById('input').value = "";

    }

    return(
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index) => <li key={index}>{car}</li>)}
            </ul>
            <input type="text" id='input'/>
            <button onClick={addCar}>Enter car</button>
        </div>
    )
}

export default MyComponent