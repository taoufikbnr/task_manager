import React, { useState } from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(taskName);
        setTaskName("");

    }
    const handleInputChange = (e) =>{
       setTaskName(e.target.value);
    }
  return (
    <form className='task-form' onClick={handleSubmit}>
        <input type="text" placeholder='Add a task' 
        name="task"
        value={taskName}
        onChange={handleInputChange} />
        <button type='submit'>Add</button>
    </form>
  )
}

export default TaskForm