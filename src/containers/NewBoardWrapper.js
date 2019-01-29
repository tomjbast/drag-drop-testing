import { connect } from 'react-redux';
import NewBoardModal from '../components/NewBoardModal.js';
import {updateStoryBoards, updateBoardOrder, setNewBoardFalse, addStoryBoard} from "../actions";

export const mapStateToProps = (state) => {
  return {
    storyBoards: state.storyBoards,
    storyBoardsOrder: state.storyBoardsOrder
  }
};

const mapDispatchToProps = {
  setNewBoardFalse,
  updateStoryBoards,
  updateBoardOrder,
  addStoryBoard
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBoardModal);
