function updateGridView( state = false, action ){
  switch(action.type) {
    case 'GRID_UPDATE':
      return !state;
    default:
      return state;
  }
}

export default updateGridView;
