import { connect } from 'react-redux';
import NonEditableBoardModal from '../components/NonEditableBoardModal.js';
import {setModalFalse} from "../actions";

export const mapStateToProps = (state) => {
  return {
    boardClicked: state.boardClicked,
    storyBoards: state.storyBoards,
  }
};

const mapDispatchToProps = {
  setModalFalse,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NonEditableBoardModal);
