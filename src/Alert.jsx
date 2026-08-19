
import styles from "./Alert.module.css"

export const Alert = ({ type = "success" }) => {

    return (
        <div className={`alert ${type}`}> { type === "success" ? "You payment was sucessful" : "something went wrong" }</div>
    )
}