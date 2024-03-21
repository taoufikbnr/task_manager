import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const TaskForm = ({taskData,setTaskData,editTask,updateTask}) => {

    const addTask = async(e) =>{
      e.preventDefault();
      try {
        const response =await axios.post("/api/tasks",taskData);
        setTaskData({completed:false,name:""});
         toast.success(response.data.msg);
      } catch (error) {
      console.log(error);
    }        
    }
 
    const handleInputChange = (e) =>{
      setTaskData(prevState => ({...prevState,[e.target.name]: e.target.value
    }));
;
    }
  return (
    <form className='task-form' onSubmit={editTask?updateTask :addTask}>
        <input type="text" placeholder='Add a task' 
        name="name"
        value={taskData.name}
        onChange={handleInputChange} />
        <button type='submit'>{editTask?"Edit":"Add"}</button>
        <ToastContainer />
    </form>
  )
}

export default TaskForm