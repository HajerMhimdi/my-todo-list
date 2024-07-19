import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

import Task from '../task/Task';

import './style.css'




function TaskList({ tasks, onDelete, onComplete }) {


  return (
    <>
      <div className="list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))
      ) : (
        <p className='emptyTasks'> No tasks available</p>
      )}
    </div>
    </>

  )
}

export default TaskList
