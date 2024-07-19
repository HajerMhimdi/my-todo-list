import React from 'react'

import './style.css'






function Heading({ tasks }) {
  const NumberOfTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;


  return (
    <>
      <section className="header">
        <div>
          To Do List
        </div>


        <div className="completedTasks">
          <div>
            <p>Created tasks</p>
            <span>{NumberOfTasks}</span>
          </div>

          <div>
            <p className="textPurple">Completed tasks</p>
            <span>{completedTasks} of {NumberOfTasks}</span>
          </div>
        </div>
      </section>



    </>
  );
}


export default Heading
