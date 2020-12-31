import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from './Tasks';
import { getLessonsTasks, getRepertoire } from './actions';
import { LOAD_TASK_DATE } from './reducer';

export default function TasksContainer() {
  const [date, setDate] = useState(new Date(2021, 0, 2))
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch();
  const [instructorId] = useState(localStorage.getItem('user_id'))

  useEffect(() => {
    (async () => {
      await dispatch(getRepertoire(instructorId))
      await dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))
      // await dispatch(getLessonsTasks(1, '2020', '0', '2'))
      await dispatch({ type: LOAD_TASK_DATE, date })
      setLoaded(true)
    })()
  }, [])

  if (!loaded) return null

  return (
    <Tasks
      date={date}
      setDate={setDate}

    />
  )
}
