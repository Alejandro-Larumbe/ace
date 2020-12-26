import { combineReducers } from 'redux';
import user from '../reducers/authReducers';
import instructor from '../reducers/instructorReducer';
import students from '../../components/students/reducer';
import student from '../../components/user/userReducer';
import schedule from '../../components/schedule/reducer'
import ui from '../reducers/ui';

const rootReducer = combineReducers({
  ui,
  student,
  students,
  instructor,
  user,
  schedule
});

export default rootReducer;
