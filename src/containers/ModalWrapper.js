import { connect } from 'react-redux';
import Modal from '../components/Modal.js';

export const mapStateToProps = (state) => {
  return {
    editing: state.editing
  }
};

export default connect(
  mapStateToProps
)(Modal);
