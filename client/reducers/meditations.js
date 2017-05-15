const meditations = ( state = [], action ) => {
  switch(action.type) {
    case 'MEDITATIONS':
      return action.meditations
    case 'ADD_MEDITATION':
      return [action.meditation, ...state];
    case 'TOGGLE-MEDITATION':
      return state.map( meditation => {
        if (meditation.id === action.id)
          return {...meditation, complete: !meditation.complete}
        return meditation
      })
    default:
      return state
  }
}

export default meditations;
