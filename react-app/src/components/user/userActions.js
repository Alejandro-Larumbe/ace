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
