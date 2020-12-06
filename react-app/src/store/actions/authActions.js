import { LOAD_INSTRUCTOR, LOAD_STUDENT, LOAD_USER } from '../reducers/authReducers'


export const signUp = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        body: user
      });
      if (res.ok) {
        const data = await res.json();
        if (data.type === 'instructors') {
          dispatch({
            type: LOAD_INSTRUCTOR,
            data
          });
        } else if (data.type === 'adults') {
          dispatch({
            type: LOAD_STUDENT,
            data
          });
        }
        localStorage.setItem("user_id", data.id);
        return data;
      }
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export const login = ( email, password, type ) => {
  return async dispatch => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        type,
      })
    });
    // debugger
    const data = await res.json();
    // debugger
    if (res.ok) {
      if (type === 'instructors') {
        dispatch({
          type: LOAD_INSTRUCTOR,
          data
        });
      } else if (type === 'adults') {
        dispatch({
          type: LOAD_STUDENT,
          data
        });
      }
      localStorage.setItem("user_id", data.id);
    }
    return data;
  }
}

export const loadUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`)

  if (response.ok) {
      const data = await response.json();
      if (data.type === "instructors") {
        dispatch({
          type: LOAD_INSTRUCTOR,
          data
        });
      } else if (data.type === "adults") {
        dispatch({
          type: LOAD_STUDENT,
          data
        });
      }
  }
}
