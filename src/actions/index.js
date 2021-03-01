// Resets a new board
export const cleanField = () => {
  return {
    type: 'CLEAN_FIELD'
  }
};

// sets the state to the new board of whichever tiles are now shown
export const revealTile = (field) => {
  return {
    type: 'REVEAL_TILE',
    payload: field,
  }
};

// ends the game and does not allow anymore tile selections
export const gameOver = (field) => {
  return {
    type: 'GAME_OVER',
    payload: field,
  }
};

export const seconds = () => {
  return {
    type: 'ADD_SECOND'
  }
};

export const minutes = () => {
  return {
    type: 'ADD_MIN'
  }
};

// not necessary.. but when seconds hit 60 this resets the seconds to 0 so we can +1 to minutes
export const resetSeconds = () => {
  return {
    type: 'RESET_SECONDS'
  }
};

//turns timer on and off
export const toggleTimer = () => {
  
  return {
    type: 'TOGGLE_TIMER'
  }
};

// clears the clock minutes and seconds
export const clearTimer = () => {
  
  return {
    type: 'CLEAR'
  }
};

export const setLeaderBoard = (stats) => {
  
  return {
    type: 'SET_LEADER_BOARD',
    payload: stats,
  }
};

export const highScoreInput = (input) => {
  return {
    type: 'HS_INPUT',
    payload: input,
  }
};