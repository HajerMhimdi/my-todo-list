import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';

import './style.css'


function Index({handleAddTask}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});


   function handleSubmit(event) {
     event.preventDefault();
     const newErrors = {};

     if (!title) newErrors.title = 'You should add a title !';
     if (!description) newErrors.description = 'You should add a description !';

     if (Object.keys(newErrors).length > 0) {
       setErrors(newErrors);
     } else {
       setErrors({});
       handleAddTask(title,description);
       setTitle('');
       setDescription('');
     }
   }

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   handleAddTask(title,description);
  //   setTitle('');
   
  //   setDescription('');
  // }


  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  return (
<>
    <div className='container'>
      <form onSubmit={handleSubmit} className="addTask">

     
        <input placeholder="Add a title" type="text" onChange={onChangeTitle} value={title} className={errors.title ? 'error' : ''}/>
        {errors.title && <div className="error-message">{errors.title}</div>}  
     

      <input placeholder="Add a description" type="text" onChange={onChangeDescription} value={description} className={errors.description ? 'error' : ''}  />
      {errors.description && <div className="error-message">{errors.description}</div>}

      <Button variant="contained" type="submit" className="submitButton"><AddTaskIcon /></Button>
      </form>
    </div>

</>
  )
}

export default Index
