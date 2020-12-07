export const LOAD_STUDENTS = 'LOAD_STUDENTS';

const students = (state = {}, action) => {
  switch (action.type) {
    case LOAD_STUDENTS:
      let students = { byId: {}, allIds: [] }
      action.students.forEach(each => {
        students.byId[each.id] = { ...each }
        students.allIds = [...students.allIds, each.id]
      })
      return students

    default: return state;
  }
}

export default students
