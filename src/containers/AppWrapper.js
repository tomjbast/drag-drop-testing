import { connect } from 'react-redux';
import App from '../components/App.js';
import {onDragEnd, setGridView, setNewBoardTrue, updateBoardOrder} from "../actions";

export const mapStateToProps = (state) => {
  return {
    storyBoards: state.storyBoards,
    storyBoardsOrder: state.storyBoardsOrder,
    modal: state.modal,
    boardClicked: state.boardClicked,
    editing: state.editing,
    newBoard: state.newBoard,
    grid: state.grid,
    state
  }
};

const mapDispatchToProps = {
  onDragEnd,
  updateBoardOrder,
  setNewBoardTrue,
  setGridView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
