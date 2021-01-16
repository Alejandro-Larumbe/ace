import { combineReducers } from 'redux';
import user from '../reducers/authReducers';
import instructor from '../reducers/instructorReducer';
import students from '../../components/students/reducer';
import student from '../../components/user/userReducer';
import schedule from '../../components/schedule/reducer'
import ui from '../reducers/ui';
import tasks from '../../components/tasks/reducer';
import repertoire from '../../components/repertoire/reducer'
import resources from '../../components/resources/reducer';

const rootReducer = combineReducers({
  resources,
  repertoire,
  tasks,
  ui,
  student,
  students,
  instructor,
  user,
  schedule
});

export default rootReducer;
