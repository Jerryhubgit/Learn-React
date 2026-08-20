
export const CustomButton = ({ text }) => {
    const handleClick = (e) => {
        console.log(`Jerry you clicked on ${e.target.value}`)
    }
    return <button style={{
        margin: "10px", 
        border: "1px solid hsl(0,0%,30%)"
    }}
        onClick={handleClick} value={text}
     >{text}</button>
}