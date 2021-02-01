import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from './Tasks';
import { getLessonsTasks } from './actions';
import { getRepertoire } from '../repertoire/actions';
import { setTitleView } from '../../store/actions/ui';

export default function TasksContainer({ currentDate }) {
  const date = useSelector(state => state.tasks.date)
  const byId = useSelector(state => state.tasks.byId)
  const booksById = useSelector(state => state.repertoire.booksById)
  const piecesById = useSelector(state => state.repertoire.piecesById)
  const [loaded, setLoaded] = useState(false)
  const [ instructorId ] = useState(localStorage.getItem('user_id'))
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(setTitleView('lessonTasks'))
      await dispatch(getRepertoire(instructorId))
      await dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))
      setLoaded(true)
    })()
  }, [dispatch, instructorId, date])

  if (!loaded ) return null

  return (
    // <h1>hi</h1>
    <Tasks
    date={date}
    byId={byId}
    booksById={booksById}
    piecesById={piecesById}
    />
  )
}
