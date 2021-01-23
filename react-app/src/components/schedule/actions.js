
import { LOAD_MONTH, LOAD_WEEK, SET_DATE, SET_CALENDAR_LESSON_ID, SET_SELECTED_DATE } from './reducer.js'


export const getMonthData = (id, year, month) => async (dispatch) => {
  const response = await fetch(`/api/calendar/${id}/month/${year}/${month}`)
  try {
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: LOAD_MONTH, data })
      return data
    }
  } catch (e) {
    console.log(e)
  }
}

export const getWeekData = (id, year, month, day) => async (dispatch) => {
  const response = await fetch(`/api/calendar/${id}/week/${year}/${month}/${day}`)
  try {
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: LOAD_WEEK, data })
      return data
    }
  } catch (e) {
    console.log(e)
  }
}

export const getMonthDataStudent = (id, year, month) => async (dispatch) => {
  const response = await fetch(`/api/lessons/${id}/student/schedule/${year}/${month}`)
  try {
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: LOAD_MONTH, data })
      return data
    }
  } catch (e) {
    console.log(e)
  }
}


export const setCurrentDate = (date) => (dispatch) => {
  dispatch({ type: SET_DATE, date })
}

export const setSelectedDate = (date) => (dispatch) => {
  dispatch({ type: SET_SELECTED_DATE, date })
}

export const setLessonId = (id) => (dispatch)=> {
  dispatch({ type: SET_CALENDAR_LESSON_ID, id})
}
