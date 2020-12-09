
export const createLesson = (lesson, id) => async()  => {
  console.log(lesson, id)
  const response = await fetch(`/api/lessons/instructor/${id}`, {
    method: "POST",
    // headers: {
    //   'Content-Type': 'multipart/formdata'
    // },
    // body: JSON.stringify(lesson)
    body:lesson,
  });
  // const data = await response.json()
  // console.log('data', data)
  return await response.json();
}
