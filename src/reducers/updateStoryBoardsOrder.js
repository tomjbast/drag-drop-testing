function updateStoryBoardsOrder(state = [1,2,3,4,5,6], action){
  switch(action.type){
    case 'BOARD_ORDER':
      return action.storyBoardsOrder;
    case 'REMOVE_FROM_BOARD_ORDER':
      return action.storyBoardsOrder;
    default:
      return state;
  }
}

export default updateStoryBoardsOrder;
