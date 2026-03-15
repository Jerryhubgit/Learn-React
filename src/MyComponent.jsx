import { useState } from 'react'

function MyComponent(){

    let [taskEl, setTask] = useState()
    let [taskList, setTaskList] = useState(['hamburger', 'squiward'])

    const getTask = (e) =>{
        
        let newTask = e.target.value
        setTask(newTask)
    }

    const addTask = () => {
        if(Boolean(taskEl) == false){
            return 
        }
        console.log(taskEl)
        setTaskList([...taskList, taskEl])
        document.querySelector('input').value = ''
    }

    const deleteTask = (e) => {
        let index = Number(e.target.parentElement .id)
        setTaskList(taskList.filter((_, i) => i !== index))
    }

    return(
        <div className='todoApp'>
            <h1>Todo</h1>
            <div className="input">
                <input type="text" onChange={getTask}/>
                <button onClick={addTask}>Add task</button>
            </div>
            <div className="todoList">
                {taskList.map((task, index) => (
                    <div className="todo" key={index} id={index}>
                        <p>{task}</p>
                        <button onClick={deleteTask}>delete</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MyComponent;