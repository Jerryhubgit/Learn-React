import styles from './Alert.module.css'
import { Button } from "./Button"

export const Alert = ({ children, type}) => {
    return (
        <div className={`${styles.alert} ${styles.type}`}>
            { children }
            <Button />
        </div>
    )
}