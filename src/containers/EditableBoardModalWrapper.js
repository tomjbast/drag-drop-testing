import { connect } from 'react-redux';
import EditableBoardModal from '../components/EditableBoardModal.js';
import {updateStoryBoards, setModalFalse, setEditingFalse} from "../actions";

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
  updateStoryBoards
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableBoardModal);
