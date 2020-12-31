import { SET_USERCARD_MODE , SET_CALENDAR_VIEW, SET_TITLE } from '../actions/ui';

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
      default: return state
  }
}
