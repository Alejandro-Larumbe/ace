import { LOAD_STUDENTS } from '../reducers/studentsReducers';


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
