import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Lesson from './Lesson';
import AddTaskForm from './AddTaskForm';

export default function Tasks() {
  const byId = useSelector(state => state.tasks.byId)
  const [open, setOpen] = useState(false);
  const booksById = useSelector(state => state.tasks.booksById)
  const piecesById = useSelector(state => state.tasks.piecesById)
  const [ lessonId, setLessonId] = useState('')
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
        booksById={booksById}
        piecesById={piecesById}
        lessonId={lessonId}
      />
      {
        Object.values(byId).map(each => {
          return <Lesson key={each.id} lesson={each} setLessonId={setLessonId} handleOpen={handleOpen}/>
        })
      }
    </>
  )

}
