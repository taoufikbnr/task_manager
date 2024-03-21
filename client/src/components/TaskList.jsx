import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    name:"",
    completed:false
  });
  const [editTask, setEditTask] = useState(false);
  const [taskId, setTaskId] = useState("");

  const fetchTasks = async() =>{
    try {
      const promise =axios.get("/api/tasks");
      const response =await toast.promise(promise,{
        pending: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
        autoClose: 2000
     })
      setTasks(response.data.tasks);

    } catch (error) {
      console.log(error);
    }
  }
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter(task=>task._id !== id));
      toast.success(response.data.msg)
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const getTask = async(task)=>{
    try {
      setTaskData({name:task.name,completed:false});
      setTaskId(task.id);
      setEditTask(true);
    } catch (error) {
      console.log(error);
    }
  }
  const updateTask = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.put(`/api/tasks/${taskId}`,taskData)
      toast.success(response.data.msg)
      setTaskData({...taskData,name:""})
      setEditTask(false);
    } catch (error) {
      console.log(error);
    }
  }
  const completeTask = async(id) =>{
    try {
      const response = await axios.put(`/api/tasks/${id}`,{completed:true})
      fetchTasks()
    } catch (error) {
      
    }
  } 
  const renderTasksByCompletion = (completed) => {
    return tasks.filter(task => task.completed === completed).map((task, i) => (
      <Task key={i}
       index={i} 
       name={task.name} 
       id={task._id} completed={task.completed}
        deleteTask={deleteTask} getTask={getTask} completeTask={completeTask} />
    ));
  };
  useEffect(() => {
    fetchTasks();
  }, [editTask,])
  return (
    <div>
      
        <h2>Task Manager</h2>
        <TaskForm 
        taskData={taskData}
        setTaskData={setTaskData}
        editTask={editTask}
        updateTask={updateTask}  />        
        <div className='--flex-between -pb'>
          <p>
            <b>Total Task:</b> {tasks.length}
          </p>
          <p>
            <b>Completed Tasks:</b> {renderTasksByCompletion(true).length}
          </p>
        </div>
        <hr />
        {renderTasksByCompletion(false)}
        <hr />
        {renderTasksByCompletion(true)}
    </div>
  )
}

export default TaskList