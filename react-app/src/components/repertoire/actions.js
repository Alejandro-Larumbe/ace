import { LOAD_REP } from './reducer';

export const getRepertoire = (id) => async dispatch => {
  const response = await fetch(`/api/repertoire/${id}`)
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


export const addPiece = (title, composer, number, instructorId) => async (dispatch) => {
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
    dispatch(getRepertoire(instructorId))
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
    dispatch(getRepertoire(instructorId))
    const data = await response.json();
    // console.log(data.id)
    return data
  }
}

export const updatePiece = (pieceId, title, composer, number, bookId, instructorId) => async dispatch => {
  const response = await fetch(`/api/repertoire/piece/${pieceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "piece_id": pieceId,
      title,
      composer,
      number,
      "book_id": bookId,
      "instructor_id": instructorId
    })
  })
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch(getRepertoire(instructorId))
    return data
  }
}

export const updateBook = (bookId, title, author, instructorId) => async dispatch => {
  const response = await fetch(`/api/repertoire/book/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "book_id": bookId,
      title,
      author,
      "instructor_id": instructorId
    })
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(getRepertoire(instructorId))
    return data
  }
}
