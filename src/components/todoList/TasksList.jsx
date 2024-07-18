import React from 'react'

import Task from '../task/Task';

import './style.css'




function TaskList ({ tasks, onDelete, onComplete })  {

    const NumberOfTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length; 
  return (

<div className='container'>
<section className="tasks">
      <div className="header">
        <div>
          <p>Created tasks</p>
          <span>{NumberOfTasks}</span>
        </div>

        <div>
          <p className="textPurple">Completed tasks</p>
          <span>{completedTasks} of {NumberOfTasks}</span>
        </div>
      </div>

      <div className="list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>

    </div>
  )
}

export default TaskList
