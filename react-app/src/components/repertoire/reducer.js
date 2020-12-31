export const LOAD_REP = "LOAD_REP";


export default function reducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_REP:
      return {
        ...state,
        ...action.data
      }
      default:
      return state;
  }
};
