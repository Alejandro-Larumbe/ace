import { getMonthData } from '../schedule/actions'

import { LOAD_CURRENT_STUDENT } from './userReducer';

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
    const data = await response.json();
    dispatch(getMonthData(data.instructor_id, new Date().getFullYear(), new Date().getMonth() ))
    return data;
  }
}

export const editUser = (id, email, firstName, lastName, address, phoneNumber, type, studioName, dob) => async (dispatch) => {
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

  if (response.ok) {
    const data = await response.json();
    dispatch(getMonthData(data.instructor_id, new Date().getFullYear(), new Date().getMonth() ))
    return data;
  }
}
