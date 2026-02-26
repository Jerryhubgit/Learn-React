

function Button(){
    let i = 0;
    const handleClick = (e) => {
        i++; console.log(e.target.innerText)
    }
    return (
        <button onClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Button