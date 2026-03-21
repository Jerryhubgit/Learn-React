import { useState } from 'react'
import './index.css'


function MyComponent(){
    const [tasksList, setTaskList] = useState(['writing', 'interving interns', 'reshing all commits'])
    const [task, setTask] = useState()
    let [position, setPosition] = useState()

    function edit(index){
        setPosition(index)
        let editTask = tasksList[index]
        document.querySelector('input').value = editTask
        document.querySelector('.inputs button').innerText = 'edit task'
    }
    
    const getTask = (e) => {
        let newTask = e.target.value
        setTask(newTask)
    }
    const addTask = (e) => {
        let isEmpty = !Boolean(task)

        if(document.querySelector('.inputs button').innerText === 'add task'){
            if(isEmpty){
                return 
            }
            setTaskList([...tasksList, task])
            setTask(undefined)
        }

        if(document.querySelector('.inputs button').innerText === 'edit task'){
            let newTask = e.target.parentElement.querySelector('input').value

            console.log(position)
            tasksList.splice(position, 1, newTask)

            console.log(tasksList)
            setTaskList([...tasksList])

            
            document.querySelector('.inputs button').innerText = 'add task'
        }
        
        document.querySelector('input').value = ""
        // console.log(document.querySelector('.input button'))
    }

    const deleteTask = (index) => {
        let updateTasksList = tasksList.filter((_, i) => i !== index)
        setTaskList(updateTasksList)
    }

    return(
        <div className="todo-app">
            <h1>TodoList</h1>
            <div className="inputs">
                <input type="text" onChange={getTask} />
                <button onClick={addTask}>add task</button>
            </div>
            
            <div className="todo-list">
                {tasksList.map((task, index) => 
                    <div className="todo" key={index}>
                        <p>{task}</p>
                        <div className="buttons">
                            <button onClick={() => deleteTask(index)} id='delete'>delete</button>
                            <button id='edit' onClick={() => edit(index)}>edit</button>
                            {/* <div className="move-btns">
                                <button>up</button>
                                <button>down</button>
                            </div> */}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default MyComponent