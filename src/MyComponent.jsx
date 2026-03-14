import { useState } from 'react'

function MyComponent(){
    const [task, setTask] = useState('')
    const [tasksList, setList] = useState(['washing', 'cooking'])

    const getTask = (e) => {
        let newTask = e.target.value; 
        setTask(newTask)
    }

    const addTask = () => {
        setList([...tasksList, task])
        document.querySelector('input').value = ""
        console.log(tasksList)
    }

    const deleteTask = (index) => {
        setList(tasksList.filter((_, i) => i !== index))
    }

    return(
        <div className="todoContainer">
            <h1>Todo</h1>
            <div className="input">
                <input type="text" onChange={getTask} />
                <button onClick={addTask}>Add item</button>
            </div>
            <div className="todo_list">
                {tasksList.map((task,index) => 
                            <div className="todo" onClick={() => deleteTask(index)} key={index} id={index}>
                                <p>{task}</p>
                                <button>delete</button>
                            </div>)}
            </div>
        </div>
    )
}

export default MyComponent