export const SET_USERCARD_MODE = 'SET_USERCARD_MODE'
export const SET_CALENDAR_VIEW = 'SET_CALENDAR_VIEW'

// export const setUserCardMode = (boolean) => {
//   return {
//     type: SET_USERCARD_MODE, boolean
//   }
// }

export const setUserCardMode = (value) => dispatch => {
  dispatch({ type: SET_USERCARD_MODE, value })
}

export const setCalendarView = (value) => dispatch => {
  dispatch({ type: SET_CALENDAR_VIEW, value })
}
