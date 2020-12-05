export const LOAD_STUDENT_INSTRUCTOR = 'LOAD_STUDENT_INSTRUCTOR';

const instructorReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_STUDENT_INSTRUCTOR:
      return {
        ...state,
        id: action.instructor.id,
        firstName: action.instructor.first_name,
        lastName: action.instructor.last_name,
        email: action.instructor.email,
        address: action.instructor.address,
        profilePicUrl: action.instructor.profile_pic_url,
        studioLogoUrl: action.instructor.studio_logo_url,
        studioName: action.instructor.studio_name,
      }
    default: return state;

  }
}

export default instructorReducer
