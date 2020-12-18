export const LOAD_STUDENTS = 'LOAD_STUDENTS';
export const LOAD_STUDENTS_VIEW = 'LOAD_STUDENTS_VIEW';
export const LOAD_STUDENTS_ID = 'LOAD_STUDENTS_ID';


const students = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case LOAD_STUDENTS:
      newState = { ...state, byId: {}, allIds: [] }
      action.students.forEach(each => {
        newState.byId[each.id] = { ...each }
        newState.allIds = [...newState.allIds, each.id]
      })
      return newState

    case LOAD_STUDENTS_ID:
      return {
        ...state,
        currentStudentId: action.id
      }

    case LOAD_STUDENTS_VIEW:
      return {
        ...state,
        view: action.view
      }

    default: return state;
  }
}



export default students
