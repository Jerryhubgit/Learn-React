import { ActionButton } from "./ActionButton"

export const Contact = () => {
    return (
        <div
            style={{
                margin: "10px", 
                border: "2px solid "
            }}
        >
            <h2>Contact Us</h2>
            <ActionButton text="send message" />
        </div>
    )
}