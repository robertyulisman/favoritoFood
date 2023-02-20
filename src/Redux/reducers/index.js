import {combineReducers} from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import errorReducers from './errorReducers';
import profileReducer from './profileReducer';

export default combineReducers({
  data: dataReducer,
  auth: authReducer,
  error: errorReducers,
  profile: profileReducer,
});
