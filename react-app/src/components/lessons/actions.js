
export const createLesson = (startDate, endDate) => async(dispatch) => {
  const response = await fetch(`/api/lessons/`)

  if (response.ok) {
    const data = await response.json();

  }
}
