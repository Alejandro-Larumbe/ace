import { useDispatch } from 'react-redux'

export const createLesson = (lesson, id) => async(dispatch)  => {
  const response = await fetch(`/api/lessons/instructor/${id}`, {
    method: "POST",
    // headers: {
    //   'Content-Type': 'multipart/formdata'
    // },
    // body: JSON.stringify(lesson)
    body:lesson,
  });
  const data = await response.json()
  return data
}


export const editLesson = (data) => async(dispatch)  => {
  const response = await fetch(`/api/lessons/instructor/${data.instructorIid}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const data = await response.json()
  return data
}
