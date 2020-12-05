import { combineReducers } from 'redux';
import user from '../reducers/authReducers'
import instructor from '../reducers/instructorReducer'


const rootReducer = combineReducers({
  instructor,
  user
});

export default rootReducer;
