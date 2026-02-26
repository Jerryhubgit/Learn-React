

function Counter(props){

    return (
        <button onClick={props.action}>{props.name}</button>
    )
}

export default Counter 