import setUpField from '../helpers/setUpField';


const cleanField = (state = [], action ) => {

  switch(action.type) {
    case 'CLEAN_FIELD':
      // return "cats"
      return setUpField(16,16,30)
    default:
      return state
  }

}

export default cleanField;