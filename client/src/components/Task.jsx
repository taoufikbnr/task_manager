import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa"
const Task = (props) => {
  return (
    <div className='task'>
        <p>
          <b>{props.index}.</b>
          {props.name}
        </p>
        <div className="task-icons">
          <FaCheckDouble color="green"/>
          <FaEdit color="purple"/>
          <FaRegTrashAlt color="red" />
        </div>
    </div>
  )
}

export default Task