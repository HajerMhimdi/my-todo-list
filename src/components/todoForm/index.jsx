import React, { useState } from 'react';

import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Tooltip from '@mui/material/Tooltip';

import { computeHours } from '../../utils/taskTime';

import './style.css';


function Index({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState({});

  const hours = computeHours(startDate, endDate);

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = 'You should add a title !';
    if (!description) newErrors.description = 'You should add a description !';
    if (!startDate) newErrors.startDate = 'You should add a start date !';
    if (!endDate) newErrors.endDate = 'You should add an end date !';
    if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
      newErrors.endDate = 'The end date should be after the start date !';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      handleAddTask(title, description, startDate, endDate);
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    }
  }


  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onChangeStartDate(event) {
    setStartDate(event.target.value);
  }

  function onChangeEndDate(event) {
    setEndDate(event.target.value);
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} className="addTask">


          <input placeholder="Add a title" type="text" onChange={onChangeTitle} value={title} className={errors.title ? 'error' : ''} />
          {errors.title && <div className="error-message">{errors.title}</div>}


          <input placeholder="Add a description" type="text" onChange={onChangeDescription} value={description} className={errors.description ? 'error' : ''} />
          {errors.description && <div className="error-message">{errors.description}</div>}

          <label className="fieldLabel" htmlFor="startDate">Start date</label>
          <input id="startDate" type="datetime-local" onChange={onChangeStartDate} value={startDate} className={errors.startDate ? 'error' : ''} />
          {errors.startDate && <div className="error-message">{errors.startDate}</div>}

          <label className="fieldLabel" htmlFor="endDate">End date</label>
          <input id="endDate" type="datetime-local" onChange={onChangeEndDate} value={endDate} className={errors.endDate ? 'error' : ''} />
          {errors.endDate && <div className="error-message">{errors.endDate}</div>}

          <div className="hoursPreview">Number of hours: <strong>{hours}</strong></div>

          <Tooltip title={'Add New Task'}>

            <Button variant="contained" type="submit" className="submitButton"><AddTaskIcon /></Button>


          </Tooltip>

        </form>
      </div>

    </>
  )
}

export default Index
