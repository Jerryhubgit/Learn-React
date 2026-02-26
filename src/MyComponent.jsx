import {useState} from 'react'

function MyComponent(){

    let [name, setName] = useState("Guest")
    let [age, setAge] = useState(0)
    let [isEmployed, setEmployed] = useState(false)

    const updateName = () => {
        setName('Squarepants')
    }

    const incrementAge = () => {
        
        setAge(++age)
    }

    const updateEmployed = () => {
        setEmployed(!isEmployed)
        console.log(isEmployed)
    }

    return(
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set name</button>
            </div>
            
            <div>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Set age</button>
            </div>

            <div>
                <p>Are you Employed: {isEmployed == true ? 'Yes' : 'No'}</p>
                <button onClick={updateEmployed}>{isEmployed == true ? 'get fired': 'get a job'}</button>
            </div>
        </>
    )
}

export default MyComponent