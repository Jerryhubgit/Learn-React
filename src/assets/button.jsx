

function Button (){
    let i = 0;
    const handleEvent = () => {
        i++; console.log(i)
    }
    return (
        <button onClick={handleEvent}></button>
    )
}

export default Button