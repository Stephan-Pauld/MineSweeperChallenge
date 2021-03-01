import manageField from './manageField';
import timerIsActive from './timerIsActive';
import minutesReducer from './minutesReducer';
import secondsReducer from './secondsReducer'
import leaderBoardReducer from './leaderBoardReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  manageField,
  timerIsActive,
  seconds: secondsReducer,
  minutes: minutesReducer,
  leaderBoard: leaderBoardReducer,
})

export default allReducers;