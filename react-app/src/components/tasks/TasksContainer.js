import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from './Tasks';
import { getLessonsTasks } from './actions';

export default function TasksContainer() {
  const [date, setDate] = useState(new Date())
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch();
  const [ instructorId ] = useState(localStorage.getItem('user_id'))
  const lessons = useSelector(state => state.tasks)


  useEffect(() => {
    dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))

    setLoaded(true)
  }, [])

  if(!loaded) return null

  return (
    <Tasks date={date} setDate={setDate} />
  )
}
