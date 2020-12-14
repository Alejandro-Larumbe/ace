import { getMonthData } from '../schedule/actions'
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
  // console.log(data)
  // console.log('data', data)
  dispatch(getMonthData(data.instructor_id, new Date().getFullYear(), new Date().getMonth() ))
  return data
}
