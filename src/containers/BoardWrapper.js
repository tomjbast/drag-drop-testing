import { connect } from 'react-redux';
import Board from '../components/Board.js';
import {
  setBoardClicked,
  deleteCard,
  setEditingFalse,
  setEditingTrue,
  setModalTrue,
  addToArchiveArray
} from "../actions";

// will need to use ownProps as second argument in mapStateToProps to pass (at least) Ids down. May need more given drag and drop

export const mapStateToProps = (state) => { // this merges state into props
  return {
    storyBoards: state.storyBoards,
    storyBoardsOrder: state.storyBoardsOrder,
    archiveArray: state.archive,
    grid: state.grid
  }
};

const mapDispatchToProps = {
  setModalTrue,
  setBoardClicked,
  setEditingFalse,
  setEditingTrue,
  deleteCard,
  addToArchiveArray
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
