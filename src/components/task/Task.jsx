import React from 'react'
import TaskIcon from '@mui/icons-material/Task';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';

import './style.css'


function Task({ task, onDelete, onComplete }) {
  return (
 
<div className={`task ${task.isCompleted ? 'task-completed' : ''}`}>
      <p className={task.isCompleted ? 'textCompleted' : ''}>
        <div className='rowDirection'>
          <h2 className="titleStyle">{task.title}</h2>
        </div>
        <div className='rowDirection'>
          <h4>Description: {task.description}</h4>
        </div>
      </p>
      {task.isCompleted ? (
        <Tooltip title={'Uncheck Task'}>
          <TaskIcon className='checkedButton' onClick={() => onComplete(task.id)} />
        </Tooltip>
      ) : (
        <Tooltip title={'Check Task'}>
          <TaskIcon className='notCheckedButton' onClick={() => onComplete(task.id)} />
        </Tooltip>
      )}
      <Tooltip title={'Delete Task'}>
        <DeleteForeverIcon className="deleteButton" onClick={() => onDelete(task.id)} />
      </Tooltip>
    </div>


  )  
  
}

export default Task
