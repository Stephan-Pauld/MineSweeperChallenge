import manageField from './manageField';
import toggleTimer from './toggleTimer';
import minutesReducer from './minutesReducer';
import secondsReducer from './secondsReducer copy'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  manageField,
  toggleTimer,
  seconds: secondsReducer,
  minutes: minutesReducer,
})

export default allReducers;