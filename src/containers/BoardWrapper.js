import { connect } from 'react-redux';
import Board from '../components/Board.js';
import {setBoardClicked, setEditingFalse, setEditingTrue, setModalTrue} from "../actions";

// will need to use ownProps as second argument in mapStateToProps to pass (at least) Ids down. May need more given drag and drop

export const mapStateToProps = (state) => { // this merges state into props
  return {
    storyBoards: state.storyBoards
  }
};

const mapDispatchToProps = {
  setModalTrue,
  setBoardClicked,
  setEditingFalse,
  setEditingTrue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
