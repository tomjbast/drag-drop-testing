function updateNewBoard(state = false, action ){
  switch(action.type) {
    case 'NEW_BOARD_TRUE':
      return true;
    case 'NEW_BOARD_FALSE':
      return false;
    default:
      return state;
  }
}

export default updateNewBoard
