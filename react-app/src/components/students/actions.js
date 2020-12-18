import { LOAD_STUDENTS, LOAD_STUDENTS_ID, LOAD_STUDENTS_VIEW } from './reducer';


export const getStudents = (id) => async(dispatch) => {
  try {
    const res = await fetch(`/api/instructors/${id}/students`)
    if (res.ok) {
      const students = await res.json();
      console.log('students', students)
      dispatch({ type: LOAD_STUDENTS, students})
      return students.students
    }
  } catch (e) {
    console.log(e)
  }
}


export const setCurrentStudentId = (id) => async dispatch => {
  await dispatch({ type: LOAD_STUDENTS_ID, id })
}


export const setView = (view) => async dispatch => {
  await dispatch({ type: LOAD_STUDENTS_VIEW, view })
}
