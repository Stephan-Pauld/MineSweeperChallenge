import manageField from './manageField';
import toggleTimer from './toggleTimer';
import secondsReducer from './secondsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  manageField,
  toggleTimer,
  seconds: secondsReducer,
})

export default allReducers;