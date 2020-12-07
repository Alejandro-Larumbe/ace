import { combineReducers } from 'redux';
import user from '../reducers/authReducers';
import instructor from '../reducers/instructorReducer';
import students from '../reducers/studentsReducers';

const rootReducer = combineReducers({
  students,
  instructor,
  user
});

export default rootReducer;
