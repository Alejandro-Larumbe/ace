
import { LOAD_MONTH } from './reducer.js'


export const getMonthData = (id, year, month) => async (dispatch) => {
  const response = await fetch(`/api/lessons/${id}/schedule/${year}/${month}`)
  try {
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: LOAD_MONTH, data })
      return data
    }
  } catch (e) {
    console.log(e)
  }
}
