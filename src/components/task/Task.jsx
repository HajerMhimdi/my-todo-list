import React from 'react'
import Button from '@mui/material/Button';

import './style.css'





function Task({ task, onDelete, onComplete }) {
  return (
    <div className='container'>

    <div className="task">

      <p className={task.isCompleted ? "textCompleted" : ""}>
        {task.title}
      </p>
      <Button variant="contained" className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? 'check' : <div />}
      </Button>

      <Button variant="contained" className="deleteButton" onClick={() => onDelete(task.id)}>
       
        delete
      </Button>
    </div>
    </div>
  )
}

export default Task
