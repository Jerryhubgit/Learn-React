import { ActionButton } from "./ActionButton"

export const Newsletter = () => {
    const handleClick = () => {
        console.log("Newsletter");
    }
    return (
        <div
            style={{
                margin: "10px", 
                border: "2px solid white"
            }}
        >
            <h2 style={{color: "white"}}>Subscribe to Newsletter</h2>
            <ActionButton onClick={handleClick} text="newsletter"/>
        </div>
    )
}