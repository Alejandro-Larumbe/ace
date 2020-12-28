import { LOAD_RESOURCES } from './reducer';

export const uploadResource = (data) => async dispatch => {
  try {
    console.log(data)
    const res = await fetch(`/api/resources`, {
      method: 'POST',
      body: data
    });

    if (res.ok) {
      const data = await res.json();
      // dispatch({
      //   type: LOAD_RESOURCES, data
      // });
      return data;
    }

    return await res.json();
  } catch (e) {
    console.log(e);
  }

}
