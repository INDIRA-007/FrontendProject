import { useState } from "react";

function TodoApp(){
    const[task, setTask] = useState("");
    const[currentTask, setCurrentTask] = useState([]);
    
    const handleAddTask =() => {
        setCurrentTask([...currentTask, task]);
        setTask("")
    }
    const handleDelete = (id) => {
        const filterTask = currentTask.filter((item,index) => index !== id);
        setCurrentTask(filterTask);
    }

    return(
        <>
            <h1>Todo App</h1>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleAddTask}>
                Add Task
            </button>

            {currentTask.length > 0 && currentTask.map((item,index) => (
                <ul>
                    <li>{item}</li>
                    <button onClick={() => handleDelete(index)}>Delete Task</button>
                </ul>
            ))}
        </>
    );
        
}
export default TodoApp;