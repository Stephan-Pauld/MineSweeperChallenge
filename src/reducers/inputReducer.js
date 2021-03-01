const inputReducer = (state = "", action) => {

  switch (action.type) {
    case 'HS_INPUT':
      return action.payload;
    case 'HS_CLEAR':
      return "";
    default:
      return state
  }

}

export default inputReducer;