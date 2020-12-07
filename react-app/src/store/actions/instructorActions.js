import { LOAD_STUDENT_INSTRUCTOR } from '../reducers/instructorReducer'

export const getInstructor = (id) => async(dispatch) => {
  try {
    const res = await fetch(`/api/users/${id}`)
    if (res.ok) {
      const instructor = await res.json();
      dispatch({ type: LOAD_STUDENT_INSTRUCTOR, instructor})
      return instructor
    }
  } catch (e) {
    console.log(e)
  }
}
