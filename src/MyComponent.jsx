import { useState } from 'react'


function MyComponent(){

    let [car , setCar] = useState({name: "Totota", year: 2026, model: 'Mustang'})

    const changeYear = (e) => setCar({...car , year: e.target.value})
    const changeName = (e) => setCar({...car, name: e.target.value})
    const changeModel = (e) => setCar({...car, model: e.target.value})

    return (

        <div>
            <p>Your Favourite car is {car.year} {car.name} {car.model} </p>

            <input type="number" onChange={changeYear} />
            <input type="text"  onChange={changeName}/>
            <input type="text" onChange={changeModel} />
        </div>
    )
}

export default MyComponent