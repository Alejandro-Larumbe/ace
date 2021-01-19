import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from './Tasks';
import { getLessonsTasks, getRepertoire } from './actions';
import { setTitleView } from '../../store/actions/ui';

export default function TasksContainer({ currentDate }) {
  const date = useSelector(state => state.tasks.date)
  const tasks = useSelector(state => state.tasks)
  const [loaded, setLoaded] = useState(false)
  const instructorId = localStorage.getItem('user_id')
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(setTitleView('lessonTasks'))
      await dispatch(getRepertoire(instructorId))
      await dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))
      setLoaded(true)
    })()
  }, [dispatch, date])

  if (!loaded) return null

  return (
    // <h1>hi</h1>
    <Tasks
    date={date}
    tasks={tasks}

    />
  )
}
