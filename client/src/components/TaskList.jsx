import { ToastContainer, toast } from 'react-toastify';
import TaskForm from './TaskForm';
import Task from './Task';

const TaskList = () => {
    const notify = () => toast.success("Wow so easy!");

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
        <Task/>
    </div>
  )
}

export default TaskList