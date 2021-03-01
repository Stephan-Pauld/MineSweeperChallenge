const inputReducer = (state = "", action) => {

  switch (action.type) {
    case 'HS_INPUT':
      return action.payload;
    default:
      return state
  }

}

export default inputReducer;