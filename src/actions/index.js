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