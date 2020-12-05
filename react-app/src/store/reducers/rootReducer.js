import { combineReducers } from 'redux';
import user from '../reducers/authReducers'


const rootReducer = combineReducers({
  user
});

export default rootReducer;
