const minutesReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_MIN':
      return state + 1;
    default:
      return state
  }

}

export default minutesReducer;