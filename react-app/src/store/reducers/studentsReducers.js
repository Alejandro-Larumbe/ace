export const LOAD_STUDENTS = 'LOAD_STUDENTS';


const students = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case LOAD_STUDENTS:
      newState = { byId: {}, allIds: [] }
      action.students.forEach(each => {
        newState.byId[each.id] = { ...each }
        newState.allIds = [...newState.allIds, each.id]
      })
      return newState

    default: return state;
  }
}



export default students
