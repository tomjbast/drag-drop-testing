function updateArchivedCards(state = [], action){
  switch(action.type){
    case 'ARCHIVE_BOARD':
      return action.archive;
    case 'REMOVE_FROM_ARCHIVE':
      return action.archive;
    default:
      return state;
  }
}

export default updateArchivedCards;
