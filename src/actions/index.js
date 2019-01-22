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
    type:'BOARD_ORDER',
    storyBoardsOrder: boardOrder
  }
}

export function onDragEnd(result, state){
  const {destination, source, draggableId} = result;
  const storyBoardsOrderCopy = Array.from(state.storyBoardsOrder);
  console.log(storyBoardsOrderCopy);

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

//need to write actions for storyboards object (refer to initialData) for now default state set in reducer
