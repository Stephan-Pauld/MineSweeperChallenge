import manageField from './manageField';
import timerIsActive from './timerIsActive';
import minutesReducer from './minutesReducer';
import secondsReducer from './secondsReducer'
import leaderBoardReducer from './leaderBoardReducer'
import inputReducer from './inputReducer'
import { combineReducers } from 'redux';
import { highScoreInput } from '../actions';

const allReducers = combineReducers({
  manageField,
  timerIsActive,
  seconds: secondsReducer,
  minutes: minutesReducer,
  leaderBoard: leaderBoardReducer,
  highScoreInput: inputReducer,
})

export default allReducers;