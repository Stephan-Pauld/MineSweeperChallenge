import setUpField from '../helpers/setUpField';

const leaderBoardReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LEADER_BOARD':
      return action.payload
    default:
      return state
  }
}

export default leaderBoardReducer;