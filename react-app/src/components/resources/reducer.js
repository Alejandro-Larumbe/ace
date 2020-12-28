export const LOAD_RESOURCES = 'LOAD_RESOURCES'

const resources = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_RESOURCES:
      return {
        ...state,
        ...action.data
      }
      default:
      return state;
  }
};

export default resources;
