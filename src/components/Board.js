import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

function Board({storyBoards, setModalTrue, setBoardClicked, setEditingFalse, setEditingTrue, board, index}) {

    return (
      <Draggable draggableId ={board.id} index={index}>
        {(provided) => (
          <div className ="board"
               onClick={() => {
                 setModalTrue();
                 setBoardClicked(board.id)
               }
               }
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
          >

            <div className ="board-title">
              <h3>{board.front.title}</h3>
            </div>

            <div className ="requester">
              <h4>{board.front.requester}</h4>
            </div>

            <div className ="board-desc">
              <h6>{board.front.desc}</h6>
            </div>

            <button onClick={() => {
              setEditingTrue();
              setBoardClicked(board.id);
              setModalTrue()
            }
            }>Edit</button>

          </div>
        )}
      </Draggable>
    );
}

export default Board
