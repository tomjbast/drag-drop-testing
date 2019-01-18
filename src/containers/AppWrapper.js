import { connect } from 'react-redux';
import App from '../components/App.js';
import {onDragEnd, updateBoardOrder} from "../actions";

export const mapStateToProps = (state) => {
  return {
    storyBoards: state.storyBoards,
    storyBoardsOrder: state.storyBoardsOrder,
    modal: state.modal,
    boardClicked: state.boardClicked,
    state
  }
};

const mapDispatchToProps = {
  onDragEnd,
  updateBoardOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
