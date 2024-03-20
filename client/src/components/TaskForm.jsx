import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

    const addTask = async() =>{
      if(taskName==="") return toast.error("Input field cannot be empty")
      try {
        const response =await axios.post("/api/tasks",{name:taskName});
        toast.success(response.data.msg);
      } catch (error) {
      console.log(error);
    }        
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
       await addTask();
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
        <ToastContainer />
    </form>
  )
}

export default TaskForm