import React from 'react'

class BoardModal extends React.Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);

    this.state = {
      storyBoards: props.storyBoards
    }
  }

  handleChange(e){
    let storyboardsCopy =  {...this.props.storyBoards};
    let boardToUpdate = storyboardsCopy[this.props.boardClicked];
    let updatedBoard = Object.assign(boardToUpdate, {[e.target.name]:e.target.value});
    let updatedStoryBoardObject = Object.assign(storyboardsCopy, {[this.props.boardClicked]:updatedBoard});

    this.setState({
      storyBoards: updatedStoryBoardObject
    });
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  setWrapperRef(node){
    this.wrapperRef = node;
  }

  handleClick(event){
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert('You clicked outside of me!');
      return
    }

  }

  render() {

    const nonEditable =
      <div className = "modal" >
        <div className ="modal-board" ref= {this.setWrapperRef}>

          <div className ="modal-title">
            <h3>{this.props.storyBoards[this.props.boardClicked].title}</h3>
          </div>

          <div className ="modal-requester">
            <h4>{this.props.storyBoards[this.props.boardClicked].requester}</h4>
          </div>

          <div className ="modal-desc">
            <h6>{this.props.storyBoards[this.props.boardClicked].desc}</h6>
          </div>

          <button onClick={() => this.props.setModalFalse()}>Close</button>

        </div>
      </div>;

    const editable =
        <div className = "modal">
          <div className ="modal-board" ref= {this.setWrapperRef}>

            <form onSubmit ={(event) => {
              event.preventDefault();
              this.props.updateStoryBoards(this.state.storyBoards);
              this.props.setModalFalse();
              this.props.setEditingFalse()
            }} className="modal-form">

              <div className="edit-title">
                User Story Title:
                <input onChange={this.handleChange} type="text" name="title" defaultValue={this.props.storyBoards[this.props.board].title} />
              </div>

              <div className="edit-requester">
                User Story Requester:
                <input onChange={this.handleChange} type="text" name="requester" defaultValue={this.props.storyBoards[this.props.board].requester} />
              </div>

              <div className="edit-desc">
                Description:
                <input onChange={this.handleChange} type="text" name="desc" defaultValue={this.props.storyBoards[this.props.board].desc} />
              </div>

              <button type="submit" className="save-button">Save and Close</button>
            </form>

          </div>
        </div>;

    return (
      <div>
      {
        this.props.editing ? editable : nonEditable
      }
      </div>
    );
  }
}

export default BoardModal
