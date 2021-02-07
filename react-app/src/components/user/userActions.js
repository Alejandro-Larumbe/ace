import { getMonthData } from '../schedule/actions'
import { LOAD_CURRENT_STUDENT } from './userReducer';
import { getStudents } from '../students/actions';

export const loadStudent = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`)

  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_CURRENT_STUDENT,
      data
    });

  }
}

export const deleteUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  })

  if (response.ok) {
    const instructorId = await response.json();
    return instructorId;
  }
}

export const editUser = (email, firstName, lastName, type, id, instructorId, address, phoneNumber, studioName, dob) => async (dispatch) => {
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

export const createUser = (email, firstName, lastName, type, instructorId) => async dispatch => {
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
        'instructor_id': instructorId
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
