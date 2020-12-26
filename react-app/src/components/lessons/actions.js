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
