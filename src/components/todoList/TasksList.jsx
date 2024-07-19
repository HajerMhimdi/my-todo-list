import React from 'react'

import Task from '../task/Task';

import './style.css'




function TaskList({ tasks, onDelete, onComplete }) {


  return (
    <>

        <section className="tasks">

          <div className="list">
            {tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />

            ))}
          </div>

        </section>
    </>

  )
}

export default TaskList
