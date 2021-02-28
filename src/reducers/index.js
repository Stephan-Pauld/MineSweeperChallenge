import manageField from './manageField';
import timerIsActive from './timerIsActive';
import minutesReducer from './minutesReducer';
import secondsReducer from './secondsReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  manageField,
  timerIsActive,
  seconds: secondsReducer,
  minutes: minutesReducer,
})

export default allReducers;