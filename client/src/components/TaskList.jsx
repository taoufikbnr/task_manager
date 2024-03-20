import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const fetchTasks = async() =>{
    try {
      const response = await axios.get("/api/tasks");
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
        <h2>Task Manger</h2>
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