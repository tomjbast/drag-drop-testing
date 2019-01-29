import openSocket from "socket.io-client";
const socket = openSocket('http://localhost:8000');

export function setModalTrue() {
  return {
    type: 'MODAL_TRUE'
  }
}

export function setModalFalse() {
  return {
    type: 'MODAL_FALSE'
  }
}

export function updateStoryBoards(editedStoryBoards){

  return {
    type: 'UPDATE_STORYBOARDS',
    storyBoards: editedStoryBoards
  }
}

export function setBoardClicked(boardId) {
  return {
    type: 'BOARD_CLICKED',
    boardId: boardId
  }
}

export function setEditingTrue() {
  return {
    type: 'EDITING_TRUE'
  }
}

export function setEditingFalse() {
  return {
    type: 'EDITING_FALSE'
  }
}

export function updateBoardOrder(boardOrder){
  return {
      type: 'BOARD_ORDER',
      storyBoardsOrder: boardOrder
    }
}

export function setNewBoardTrue() {
  return {
    type: 'NEW_BOARD_TRUE'
  }
}

export function setNewBoardFalse() {
  return {
    type: 'NEW_BOARD_FALSE'
  }
}

export function addToArchiveArray(boardId, archiveArray){
  let archiveArrayCopy = archiveArray.slice(0);
  archiveArrayCopy.push(boardId);

  return {
    type:'ARCHIVE_BOARD',
    archive: archiveArrayCopy
  }
}

export function deleteCard(boardId, storyBoardsOrder){
  let storyBoardsOrderCopy = storyBoardsOrder.slice(0);
  let indexOfItemToRemove = storyBoardsOrderCopy.indexOf(boardId);
  storyBoardsOrderCopy.splice(indexOfItemToRemove, 1);

  return {
    type:'REMOVE_FROM_BOARD_ORDER',
    storyBoardsOrder: storyBoardsOrderCopy
  }
}

export function onDragEnd(result, state){
  const {destination, source, draggableId} = result;
  const storyBoardsOrderCopy = Array.from(state.storyBoardsOrder);

  if (!destination) {
    return {
      type: 'BOARD_ORDER',
      storyBoardsOrder: state.storyBoardsOrder
    }
  }

  storyBoardsOrderCopy.splice(source.index, 1);
  storyBoardsOrderCopy.splice(destination.index, 0, draggableId);

  socket.emit('drag', storyBoardsOrderCopy);

  return {
    type: 'BOARD_ORDER',
    storyBoardsOrder: storyBoardsOrderCopy
  }
}

export function addItemToArray(boardOrder){
  return (dispatch) => {
    dispatch(updateBoardOrder(boardOrder))
  }
}

export function addStoryBoard(originalStoryBoards, boardToAdd, storyBoardsOrderArray) {

  const id = boardToAdd.id;
  const originalStoryBoardsCopy = JSON.parse(JSON.stringify(originalStoryBoards));
  originalStoryBoardsCopy[id] = boardToAdd;

  const arrayCopy = storyBoardsOrderArray.slice();
  arrayCopy.push(id);

  console.log(originalStoryBoardsCopy);

  return (dispatch) => {
    dispatch(updateStoryBoards(originalStoryBoardsCopy));
    dispatch(addItemToArray(arrayCopy))
  }

}

//need to write actions for storyboards object (refer to initialData) for now default state set in reducer
