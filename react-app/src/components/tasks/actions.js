import { LOAD_LESSONS_TASKS, LOAD_REPERTOIRE } from './reducer';

export const getLessonsTasks = (id, year, month, day) => async(dispatch) => {
  const response = await fetch(`/api/tasks/instructor/${id}/date/${year}/${month}/${day}`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_LESSONS_TASKS,
      data
    })
  }
}

export const addTask = (duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted) => async(dispatch) => {
  const response = await fetch(`/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      duration, frequency, instructions, 'type_id': typeId, "lesson_id": lessonId, "piece_id": pieceId, "book_id": bookId, "is_completed":isCompleted
    })
  })
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
