export const LOAD_INSTRUCTOR = "LOAD_USER";
export const LOAD_STUDENT = "LOAD_STUDENT";

const userReducer = (state = {}, action) => {
  // debugger
  switch (action.type) {
    case LOAD_INSTRUCTOR:
      return {
        ...state,
        id: action.data.id,
        firstName: action.data.first_name,
        lastName: action.data.last_name,
        email: action.data.email,
        address: action.data.address,
        profilePicUrl: action.data.profile_pic_url,
        studioLogoUrl: action.data.studio_logo_url,
        studioName: action.data.studio_name,
        type: action.data.type,
      }

    case LOAD_STUDENT:
      return {
        ...state,
        id: action.data.id,
        firstName: action.data.first_name,
        lastName: action.data.last_name,
        email: action.data.email,
        address: action.data.address,
        profilePicUrl: action.data.profile_pic_url,
        type: action.data.type,
        instructorId: action.data.instructor_id,
        isParent: action.data.is_parent,
        isStudent: action.data.is_student
      }

    default:
      return state;
  }
};


export default userReducer;
