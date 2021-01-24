
export const LOAD_MONTH = "LOAD_MONTH";
export const SET_DATE = "SET_DATE";
export const LOAD_WEEK = "LOAD_WEEK";
export const SET_CALENDAR_LESSON_ID = 'SET_CALENDAR_LESSON_ID';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

const schedule = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_MONTH:
      return {
        ...state,
        ...action.data
      }
    case LOAD_WEEK:
      return {
        ...state,
        ...action.data
      }
    case SET_DATE:
      return {
        ...state,
        currentDate: action.date
      }
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.date
      }
    case SET_CALENDAR_LESSON_ID:
      return {
        ...state,
        lessonId: action.id
      }


    default: return state;
  }
}

export default schedule;
