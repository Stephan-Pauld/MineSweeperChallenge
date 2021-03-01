const secondsReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_SECOND':
      return state + 1;
    case 'RESET_SECONDS':
      return 0;
    case 'CLEAR':
      return 0;
    default:
      return state
  }

}

export default secondsReducer;