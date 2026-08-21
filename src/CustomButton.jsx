

export const CustomButton = ({ text = "default" }) => {
    const handleClick = (e) => {
        console.log(`You just clicked ${text} button`)
    }
    return <button 
        style={{
            margin: "5px"
        }}
        onClick={handleClick}>{text}</button>
}