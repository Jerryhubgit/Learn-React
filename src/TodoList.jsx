import { useState } from 'react'

export const TodoList = () => {
    const [ list, setList ] = useState([
        { id: 1, text: "Learn Embeded systems", done: false}, 
        { id: 2, text: "Develop linux subsystem", done: false }
    ])

    const deleteItem = (id) => {
        setList(list.filter((item) => id !== item.id ))
    }
    const toggleDone = (id) => {

        setList(list.map(item => {
            if(item.id === id){
                return { ...item, done: !item.done }
            }
            return item
        }))
    }
    const listElements = list.map(({id, text, done }) => {
        return(
            <li key={id} style={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
            }}>
                <p style={{
                    textDecoration: done ? "line-through" : "none"
                }}>{text}</p> 
                <button style={{
                    padding: "5px", 
                    fontSize: "12px", 
                    backgroundColor: "hsl(0,100%,40%)", 
                    marginLeft: "20px"
                }} onClick={() => deleteItem(id)}>remove</button>
                <button  style={{
                    padding: "5px", 
                    fontSize: "12px",
                    backgroundColor: done && "hsl(120,50%,40%)",
                    marginLeft: "5px"}}
                 onClick={() => toggleDone(id)}>{!done ? "Complete task" : "Completed" }</button>
            </li>
        )

    })
    const addItem = () => {
        const item = {
            id: Date.now(), 
            text: "Testing micro controllers", 
            done: false
        }

        setList([...list, item])
    }
    return <div>
        <ul>
            {listElements}
            <button onClick={addItem}>add item</button>
        </ul>
    </div>
}