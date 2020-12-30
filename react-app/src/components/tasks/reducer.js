export const LOAD_LESSONS_TASKS = 'LOAD_LESSONS_TASKS'
export const LOAD_REPERTOIRE = 'LOAD_REPERTOIRE'


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
    default: return state;
  }
}
