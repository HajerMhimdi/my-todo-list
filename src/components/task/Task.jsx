import React from 'react'
import TaskIcon from '@mui/icons-material/Task';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import './style.css'


function Task({ task, onDelete, onComplete }) {
  return (
 
   <div className="task">
    
      <p className={task.isCompleted ? "textCompleted" : ""}>
       <div className='rowDirection'>
        <h2 className="titleStyle">{task.title} </h2> 
    </div>
    <div className='rowDirection'>
    <h4>Description:  {task.description} </h4>
    </div>
      </p>
      {task.isCompleted ? (
        <TaskIcon className='checkedButton' onClick={() => onComplete(task.id)} />
      ) : (
        <TaskIcon className='notCheckedButton' onClick={() => onComplete(task.id)} />
      )}
      <DeleteForeverIcon className="deleteButton" onClick={() => onDelete(task.id)} />
    </div> 


  )  
  
}

export default Task
