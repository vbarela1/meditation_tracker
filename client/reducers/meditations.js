const meditations = ( state = [], action ) => {
  switch(action.type) {
    case 'MEDITATIONS':
      return action.meditations
    case 'ADD_MEDITATION':
      return [action.meditation, ...state];
    default:
      return state
  }
}

export default meditations;
