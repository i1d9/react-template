import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { contentReducer } from './contentReducer';

export default combineReducers({
    authReducer,
    contentReducer,
  });