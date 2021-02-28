
// can I add multiple reducers to one file?
// Could I have made a "Timer" Reducer with
// state ={m:0, s:0} and manage the seconds and minutes
// inside 1 reducer?


const minutesReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_MIN':
      return state + 1;
    case 'CLEAR':
      return 0;
    default:
      return state
  }

}

export default minutesReducer;