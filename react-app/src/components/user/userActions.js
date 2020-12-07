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
