
import "./Alert.css"

console.log(alert)
export const Alert = ({type = "success"}) =>{
    return (
        <>
            <div className={`alert ${type === 'success' ? "success" : "error"}`}> 
                <h3> {type === "success" ? "Payment was successful" : 'Error: Something went wrong'}</h3>
                <button
                    className={`button ${ type === "error" ? "error_btn" : "success_btn" }`} 
                >{type === "success" ? "continue to dashboard": "try again!!"}</button>
            </div>
        </>
    )
}