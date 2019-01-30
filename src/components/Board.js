import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import cx from 'classnames'

function Board({
                 storyBoards,
                 addToArchiveArray,
                 archiveArray,
                 setModalTrue,
                 setBoardClicked,
                 storyBoardsOrder,
                 setEditingFalse,
                 setEditingTrue,
                 board,
                 index,
                 deleteCard,
                 grid}) {

  const boardCss = cx('board', {
    'board--grid': grid
  });

  const title = cx('board-title', {
    'board-title--grid': grid
  });

  const requester = cx('requester', {
    'requester--grid': grid
  });

  const description = cx('board-desc', {
    'board-desc--grid': grid
  });

  const buttons = cx('button_wrapper', {
    'button_wrapper--grid': grid
  });


    return (
      <Draggable draggableId ={board.id} index={index}>
        {(provided) => (
          <div className ={boardCss}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}>
            <div className ="board-clickable"
                 onClick={() => {
                   setModalTrue();
                   setBoardClicked(board.id)
                 }}>

              <div className ={title}>
                <h3>{board.front.title}</h3>
              </div>

              <div className ={requester}>
                <h4>{board.front.requester}</h4>
              </div>

              <div className ={description}>
                <h6>{board.front.desc}</h6>
              </div>


            </div>
            <div className={buttons}>
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
          </div>
        )}
      </Draggable>
    );
}

export default Board
