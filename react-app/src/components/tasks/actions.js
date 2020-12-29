import { LOAD_LESSONS_TASKS } from './reducer';

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

export const addTask = () => async(dispatch) => {
  const response = await fetch(`/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({

    })
  })
}
