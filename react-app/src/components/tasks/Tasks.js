import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Lesson from './Lesson';
import AddTaskForm from './AddTaskForm';

export default function Tasks() {
  const byId = useSelector(state => state.tasks.byId)
  const [open, setOpen] = useState(false);

  // const [lessons] = useState(Object.values(byId))

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddTaskForm
        open={open}
        handleClose={handleClose}
      />
      {
        Object.values(byId).map(each => {
          return <Lesson lesson={each} handleOpen={handleOpen}/>
        })
      }
    </>
  )

}
