import React from 'react';

import Task from '../task/Task';
import { formatDate, groupTasksByDate } from '../../utils/taskTime';

import './style.css';



function TaskList({ tasks, onDelete, onComplete }) {
  const groups = groupTasksByDate(tasks);

  return (
    <>
      <div className="list">
        {tasks.length > 0 ? (
          groups.map((group) => (
            <section key={group.dateKey || 'no-date'} className="dateSection">
              <h3 className="dateSectionTitle">{formatDate(group.dateKey)}</h3>
              {group.tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
              ))}
            </section>
          ))
        ) : (
          <p className='emptyTasks'> No tasks available</p>
        )}
      </div>
    </>

  )
}

export default TaskList
