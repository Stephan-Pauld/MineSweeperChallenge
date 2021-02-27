import setUpField from '../helpers/setUpField';


const manageField = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAN_FIELD':
      return setUpField(16, 16, 30);
    case 'REVEAL_TILE':
      return action.payload;
    case 'GAME_OVER':
      return action.payload;
    default:
      return state
  }

}

export default manageField;