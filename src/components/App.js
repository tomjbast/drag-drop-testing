import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import BoardWrapper from "../containers/BoardWrapper";
import ModalWrapper from "../containers/ModalWrapper";
import NewBoardWrapper from "../containers/NewBoardWrapper";
import openSocket from 'socket.io-client';
import cx from 'classnames'
const socket = openSocket('http://localhost:8000');


class App extends React.Component {

  constructor(props){
    super(props);

    socket.on('drag', data => { // this could be in middleware listening  "drag"
      this.props.updateBoardOrder(data)
    });
  }

  render() {
    const allBoards = cx('all-boards', {
      'all_boards--grid': this.props.grid
    });


    return (
      <React.Fragment>
        <div className="nav-bar">
          <button onClick={() => this.props.setNewBoardTrue()}>Add Board</button>
          <button onClick={() => this.props.setGridView()}>Grid View</button>
        </div>
        <DragDropContext onDragEnd = {(result) => {
          this.props.onDragEnd(result, this.props.state);
        }}>

          <Droppable droppableId="1">
            {(provided) => (
              <div className={allBoards} ref={provided.innerRef} {...provided.droppableProps}>
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
          </Droppable>
        </DragDropContext>
          {
            this.props.modal && <ModalWrapper/>
          }
          {
            this.props.newBoard && <NewBoardWrapper/>
          }

      </React.Fragment>
    );
  }
}

export default App;
