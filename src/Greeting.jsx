

export const Greeting = ({message = "Hello, ", name = "Benjamin"}) => {
    console.log(message)
    return (
        <>
            <h1> {message} {name}</h1>
            <p>Hi {name}</p>
        </>
    )
}