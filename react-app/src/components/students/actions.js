import { LOAD_STUDENTS } from './reducer';


export const getStudents = (id) => async(dispatch) => {
  try {
    const res = await fetch(`/api/instructors/${id}/students`)
    if (res.ok) {
      const students = await res.json();
      dispatch({ type: LOAD_STUDENTS, students})
      return students.students
    }
  } catch (e) {
    console.log(e)
  }
}


export const deleteStudent = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  })

  if (response.ok) {
    const instructorId = await response.json();
    return instructorId;
  }
}

export const editStudent = (email, firstName, lastName, type, id, instructorId, address, phoneNumber, studioName, dob) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'first_name': firstName,
      'last_name': lastName,
      'phone_number': phoneNumber,
      email,
      address,
      type: type,
      'studio_name': studioName,
      dob
    })
  })
  // console.log(response)
  if (response.ok) {
    const data = await response.json();
    await dispatch(getStudents(instructorId))
    console.log('data----------', data)
    return data;
  }
}

export const createStudent = (email, firstName, lastName, type, instructorId, dob) => async dispatch => {
  try {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'first_name': firstName,
        'last_name': lastName,
        email,
        type,
        'instructor_id': instructorId,
        dob
      })
    })
    // console.log('response,--------', await response.json())
    // console.log('responseOk', response.ok)
    if (response.ok) {
      const data = await response.json();
      // console.log('data----------', data)
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}
