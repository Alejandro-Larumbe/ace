import { SET_USERCARD_MODE, SET_CALENDAR_VIEW, SET_TITLE, SET_LESSON_VIEW } from '../actions/ui';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_USERCARD_MODE:
      return {
        ...state,
        userCardMode: action.value
      }
    case SET_CALENDAR_VIEW:
      return {
        ...state,
        calendarView: action.value
      }
    case SET_TITLE:
      return {
        ...state,
        titleView: action.value
      }
    case SET_LESSON_VIEW:
      return {
        ...state,
        calendarLessonView: action.view
      }
    default: return state
  }
}
