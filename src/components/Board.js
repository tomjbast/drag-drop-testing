import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

function Board({storyBoards,
                 addToArchiveArray,
                 archiveArray,
                 setModalTrue,
                 setBoardClicked,
                 storyBoardsOrder,
                 setEditingFalse,
                 setEditingTrue,
                 board,
                 index,
                 deleteCard}
                 ){
    return (
      <Draggable draggableId ={board.id} index={index}>
        {(provided) => (
          <div className ="board"
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}>
            <div className ="board-clickable"
                 onClick={() => {
                   setModalTrue();
                   setBoardClicked(board.id)
                 }}>

              <div className ="board-title">
                <h3>{board.front.title}</h3>
              </div>

              <div className ="requester">
                <h4>{board.front.requester}</h4>
              </div>

              <div className ="board-desc">
                <h6>{board.front.desc}</h6>
              </div>


            </div>
            <button onClick={() => {
              setEditingTrue();
              setBoardClicked(board.id);
              setModalTrue()}
            }>Edit</button>
            <button onClick={() => deleteCard(board.id, storyBoardsOrder)}>Delete</button>
            <button onClick={() => {
              deleteCard(board.id, storyBoardsOrder);
              addToArchiveArray(board.id, archiveArray)
            }}>Archive</button>
          </div>
        )}
      </Draggable>
    );
}

export default Board
