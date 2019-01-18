function updateModalBoolean( state = false, action ){
  switch(action.type) {
    case 'MODAL_TRUE':
      return true;
    case 'MODAL_FALSE':
      return false;
    default:
      return state;
  }
}

export default updateModalBoolean;
