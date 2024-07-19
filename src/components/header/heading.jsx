import React from 'react'

import './style.css'


import UnpublishedRoundedIcon from '@mui/icons-material/UnpublishedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Tooltip from '@mui/material/Tooltip';


function Heading({ tasks }) {
  const NumberOfTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;


  return (
    <>
      <section className="header">


        <div className="toDoTitle">
          To Do List
        </div>
        <div className="completedTasks">
<Tooltip title={'Created task'}>
      <div className="iconWrapper">
        <UnpublishedRoundedIcon className="createTasks" />
        <span className="notification">{NumberOfTasks}</span>
      </div>
      </Tooltip>
      <Tooltip title={'Completed task'}>

      <div className="iconWrapper" >
        <CheckCircleRoundedIcon className="completeTask" />
        <span className="completedText">{completedTasks} </span>
      </div>
      </Tooltip>

    </div>


      </section>



    </>
  );
}


export default Heading
