
export const LOAD_MONTH = "LOAD_MONTH";
export const SET_DATE = "SET_DATE";
export const LOAD_WEEK = "LOAD_WEEK";

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

    default: return state;
  }
}

export default schedule;
