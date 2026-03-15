import { useState, useEffect } from 'react'


function Effect (){
    const [num, setNum] = useState(0)
    const [colors, setColor] = useState('green')

    
    
    useEffect(() => {
        document.querySelector('h1').style.color = colors
        document.title = `Counter ${num}`
    }, [colors])
    const add = () => {
        setNum(n => ++n)
    }
    const substract = () => {
        setNum(n => --n)
    }
    const changeColor = () => {
        let newColor = colors === 'green' ? 'red' : 'green'
        setColor(newColor)
    }
    
    return(
        <div className='effect'>
            <h1>Count {num}</h1>
            <button onClick={add}>Add</button>
            <button onClick={substract}>Substract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Effect