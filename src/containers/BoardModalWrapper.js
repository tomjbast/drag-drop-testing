import { connect } from 'react-redux';
import BoardModal from '../components/BoardModal.js';
import {updateStoryBoards, setBoardClicked, setModalFalse, setEditingFalse} from "../actions";

export const mapStateToProps = (state) => {
  return {
    storyBoards: state.storyBoards,
    boardClicked: state.boardClicked,
    editing: state.editing
  }
};

const mapDispatchToProps = {
  setModalFalse,
  setEditingFalse,
  setBoardClicked,
  updateStoryBoards
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardModal);
