export const cleanField = () => {
  return {
    type: 'CLEAN_FIELD'
  }
};

export const revealTile = (field) => {
  return {
    type: 'REVEAL_TILE',
    payload: field,
  }
};

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

export const resetSeconds = () => {
  return {
    type: 'RESET_SECONDS'
  }
};