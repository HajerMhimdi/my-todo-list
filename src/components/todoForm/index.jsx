import React from 'react'
import SendIcon from '@mui/icons-material/Send';import { useState } from 'react';
import Button from '@mui/material/Button';

import './style.css'


function Index({handleAddTask}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title,description);
    setTitle('');
   
    setDescription('');
  }

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
      <input placeholder="Add a title" type="text" onChange={onChangeTitle} value={title} />
      <input placeholder="Add a description" type="text" onChange={onChangeDescription} value={description} />
        <Button variant="contained" type="submit" className="submitButton"><SendIcon /></Button>
      </form>
    </div>

</>
  )
}

export default Index
