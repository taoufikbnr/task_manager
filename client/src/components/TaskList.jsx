import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const fetchTasks = async() =>{
    setisLoading(true);
    try {
      const promise = axios.get("/api/tasks");
      const response =await toast.promise(promise,{
        pending: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
     })
      setTasks(response.data.tasks);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTasks();
  }, [])
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm/>        
        <div className='--flex-between -pb'>
          <p>
            <b>Total Task:</b> 0
          </p>
          <p>
            <b>Completed Tasks:</b> 0
          </p>
        </div>
        <hr />
        {tasks.map((el,i)=>
          <Task key={i} index={i} name={el.name} />
        )}
    </div>
  )
}

export default TaskList