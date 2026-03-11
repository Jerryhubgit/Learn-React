import { useState } from 'react'



function MyComponent(){
    const [year, setYear] = useState()
    const [brand, setBrand] = useState()
    const [model, setModel] = useState()

    const [cars, setCar] = useState([])

    const getYear = (e) => { setYear(e.target.value)}
    const getBrand = (e) => { setBrand(e.target.value)}
    const getModel = (e) => { setModel(e.target.value)}
     
    const addCar = () => {
        const newCar = {year: year, model: model, brand: brand}

        console.log(cars)
        setCar([...cars, newCar])
    }

    const removeCar = (index) => {
        setCar(cars.filter((car, i) => i !== index))
    }

    return(
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => removeCar(index)}>{car.year} {car.model} {car.brand}</li>)}
            </ul>
            <input type="number" onChange={getYear} /><br />
            <input type="text" onChange={getBrand}/> <br />
            <input type="text" onChange={getModel}/><br />
            <button onClick={addCar}>Enter car</button>
        </div>
    )
}


export default MyComponent;