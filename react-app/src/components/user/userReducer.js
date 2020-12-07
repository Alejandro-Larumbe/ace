export const LOAD_CURRENT_STUDENT ='LOAD_CURRENT_STUDENT';


const studentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_CURRENT_STUDENT:
      return {
        ...state,
        ...action.data
      }
      default:
      return state;
  }
};

export default studentReducer;
