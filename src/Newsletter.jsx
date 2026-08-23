import { ActionButton } from "./ActionButton"

export const Newsletter = () => {

    const handleClick = () => {
        console.log("Subscribe to newsletter")
    }
    return (
        <div>
            <h3>Subscribe to Newsletter</h3>
            <ActionButton text="Subscribe" onClick={handleClick} />
        </div>
    )
}
