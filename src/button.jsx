

function Button(){
    let i = 0;
    const handleClick = (e) => {
        i++; console.log(e)
    }
    return (
        <button onClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Button