import { combineReducers } from 'redux';
import user from '../reducers/authReducers';
import instructor from '../reducers/instructorReducer';
import students from '../reducers/studentsReducers';
import student from '../../components/user/userReducer';

const rootReducer = combineReducers({
  student,
  students,
  instructor,
  user
});

export default rootReducer;
