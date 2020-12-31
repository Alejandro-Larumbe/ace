export const LOAD_LESSONS_TASKS = 'LOAD_LESSONS_TASKS'
export const LOAD_REPERTOIRE = 'LOAD_REPERTOIRE'
export const LOAD_TASK_DATE = 'LOAD_TASK_DATE'


export default function reducer (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_LESSONS_TASKS:
      return {
        ...state,
        ...action.data
      }
    case LOAD_REPERTOIRE:
      return {
        ...state,
        ...action.data
      }
    case LOAD_TASK_DATE:
      return {
        ...state,
        'date': action.date
      }
    default: return state;
  }
}
