import { eachDayOfInterval } from "date-fns";

export const LOAD_STUDENTS = 'LOAD_STUDENTS';

// const students = (state = {}, action) => {
//   switch (action.type) {
//     case LOAD_STUDENTS:
//       state['students'] = { byId: {}, allIds: [] }
//       let mappedData = action.students.map(each => {
//         return  {
//           id: each.id,
//           firstName: each.first_name,
//           lastName: each.last_name,
//           profileOicUrl: each.profile_pic_url,
//           email: each.email,
//           address: each.address,
//           hashed_password: each.hashed_password,
//           type: each.type,
//           dob: each.dob,
//           isStudent: each.is_student,
//           isParent: each.is_parent,
//           instructorId: each.instructor_id,
//         }
//       })

//         mappedData.forEach(each =>{
//           state.students.byId[each.id] = {...each}
//           state.students.allIds=[...state.students.allIds, each.id]
//         })
//       return state

//     default: return state;
//   }
// }

// export default students

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
