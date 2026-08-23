import { ActionButton } from "./ActionButton"

export const Contact = () => {

    const handleClick = () => {
        console.log("Send us message")
    }
    return (
        <div>
            <h3> Contact us </h3>
            <ActionButton text="Send message" onClick={handleClick} />
        </div>
    )
}
