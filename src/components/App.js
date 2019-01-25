import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import BoardWrapper from "../containers/BoardWrapper";
import ModalWrapper from "../containers/ModalWrapper";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


class App extends React.Component {

  constructor(props){
    super(props);

    socket.on('drag', data => { // this could be in middleware listening  "drag"
      this.props.updateBoardOrder(data)
    });
  }

  render() {
    return (

      <DragDropContext onDragEnd = {(result) => {
        this.props.onDragEnd(result, this.props.state);
      }}>

        <Droppable droppableId="1">
          {(provided) => (
            <div className="all-boards" ref={provided.innerRef} {...provided.droppableProps}>
              {
                this.props.storyBoardsOrder.map((boardId, index) => {
                  const board = this.props.storyBoards[boardId];
                  return (
                  <BoardWrapper
                    key = {board.id}
                    board={board}
                    index={index}
                  />
                  )
                })
              }
            </div>
          )}
        </Droppable>scf
        {
          this.props.modal ? <ModalWrapper/> : null
        }

      </DragDropContext>
    );
  }
}

export default App;
