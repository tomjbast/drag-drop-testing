function updateBoardClickedId( state = null, action ){
  switch(action.type) {
    case 'BOARD_CLICKED':
      return action.boardId;
    default:
      return state;
  }
}

export default updateBoardClickedId;
