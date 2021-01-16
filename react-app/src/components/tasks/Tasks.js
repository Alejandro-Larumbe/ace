import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Lesson from './Lesson';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';

export default function Tasks() {
  const byId = useSelector(state => state.tasks.byId)
  const [open, setOpen] = useState(false);
  const booksById = useSelector(state => state.tasks.booksById)
  const piecesById = useSelector(state => state.tasks.piecesById)
  const [lessonId, setLessonId] = useState('')
  const [lessons] = useState(Object.values(byId))
  const [currentId, setCurrentId] = useState()
  const [i, setI] = useState('')
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log('--I---I-----', byId[16]['tasks'])
  return (
    <>
      {/* <EditTaskForm
        open={open}
        handleClose={handleClose}
        booksById={booksById}
        piecesById={piecesById}
        // tasks={byId[16]['tasks']}
        // i ={i}

      />
      <AddTaskForm
        open={open}
        handleClose={handleClose}
        booksById={booksById}
        piecesById={piecesById}
        lessonId={lessonId}
      /> */}
      {
        Object.values(byId).map((each, i) => {
          // setI(i)
          return <Lesson setCurrentId={setCurrentId} key={each.id} lesson={each} setLessonId={setLessonId} setCurrentId={setCurrentId} handleOpen={handleOpen}/>
        })
      }
    </>
  )

}
