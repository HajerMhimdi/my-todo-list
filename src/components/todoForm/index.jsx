import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import Button from '@mui/material/Button';

import './style.css'



function Index({handleAddTask}) {
  const [title, setTitle] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
<>
    <div className='container'>
      <form onSubmit={handleSubmit} className="addTask">
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <Button variant="contained"><AddBoxIcon /> Add </Button>
      </form>
    </div>

</>
  )
}

export default Index
