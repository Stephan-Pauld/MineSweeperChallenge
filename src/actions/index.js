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