import { LOAD_REP } from './reducer';

export const getRepertoire = (id) => async dispatch => {
  const response = await fetch (`/api/repertoire/${id}`)
  try {
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: LOAD_REP, data })
      return data
    }
  } catch (e) {
    console.log(e)
  }
}


export const addPiece = (instructorId, title, composer, number) => async (dispatch) => {
  const response = await fetch(`/api/repertoire/piece`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "instructor_id": instructorId, title, composer, number
    })
  })
  if (response.ok) {
    const data = await response.json();
    return data
  }
}

export const addBook = (instructorId, title, author) => async (dispatch) => {
  const response = await fetch(`/api/repertoire/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "instructor_id": instructorId, title, author
    })
  })
  if (response.ok) {
    const data = await response.json();
    // console.log(data.id)
    return data
  }
}
