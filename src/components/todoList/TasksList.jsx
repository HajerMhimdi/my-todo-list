import React from 'react'

import Task from '../task/Task';

import './style.css'




function TaskList({ tasks, onDelete, onComplete }) {


  return (
    <>

      <div className='container'>
        <section className="tasks">
         
      <div className='container'>
        <div className="list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
          
          ))}
        </div>
      </div>

        </section>
      </div>
    </>

  )
}

export default TaskList
