
export const LOAD_MONTH = "LOAD_MONTH";

const schedule = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_MONTH:
      return {
        ...state,
        ...action.data
      }

    default: return state;
  }
}

export default schedule;
