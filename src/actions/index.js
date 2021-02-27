export const cleanField = () => {
  return {
    type: 'CLEAN_FIELD'
  }
};

export const revealTile = (field) => {
  console.log("REVEALING TILE");
  return {
    type: 'REVEAL_TILE',
    payload: field,
  }
};