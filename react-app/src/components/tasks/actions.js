import { parse } from 'date-fns';
import { LOAD_LESSONS_TASKS, LOAD_REPERTOIRE, LOAD_TASK_DATE } from './reducer';

export const getLessonsTasks = (id, year, month, day) => async (dispatch) => {
  const response = await fetch(`/api/tasks/instructor/${id}/date/${year}/${month}/${day}`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_LESSONS_TASKS,
      data
    })
  }
}

export const addTask = (duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted) => async (dispatch) => {

  duration = duration ? parseInt(duration) : null
  frequency = frequency ? parseInt(frequency) : null
  const response = await fetch(`/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      duration, frequency, instructions, 'type_id': typeId, "lesson_id": lessonId, "piece_id": pieceId, "book_id": bookId, "is_completed": isCompleted
    })
  })
}

export const updateTask = (duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted, id) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      duration, frequency, instructions, 'type_id': typeId, "lesson_id": lessonId, "piece_id": pieceId, "book_id": bookId, "is_completed": isCompleted
    })
  })
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_LESSONS_TASKS,
      data
    })
  }
}

export const getRepertoire = (id) => async dispatch => {
  const response = await fetch(`/api/repertoire/${id}`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_REPERTOIRE, data
    })
  }
}

export const setTaskDate = (date) => async dispatch => {
  // const newDate = new Date(date)
  dispatch({ type: LOAD_TASK_DATE, date })
}
