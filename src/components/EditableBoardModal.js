import React from 'react'

class EditableBoardModal extends React.Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.flipCard = this.flipCard.bind(this);

    this.state = {
      storyBoards: props.storyBoards,
      boardFront: true
    }
  }

  handleChange(e){
    // below line is more load heavy than importing a lib to do our deep object clone but fine for our purposes
    let storyboardsCopy =  JSON.parse(JSON.stringify(this.state.storyBoards));
    let boardToUpdate = storyboardsCopy[this.props.boardClicked];

    if (this.state.boardFront) {
      boardToUpdate.front = Object.assign({}, boardToUpdate.front, {[e.target.name]: e.target.value});
    } else if (!this.state.boardFront) {
      boardToUpdate.back[e.target.name].item = e.target.value;
    } else {
      alert("something has gone very wrong and we cant save your changes")
    }

    this.setState({
      storyBoards: storyboardsCopy
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
      this.props.updateStoryBoards(this.state.storyBoards);
      this.props.setModalFalse();
      this.props.setEditingFalse();
    }
  }

  flipCard(){
    this.setState(state => ({
      boardFront: !state.boardFront
    }))
  }

  render() {
    const board = this.state.storyBoards[this.props.boardClicked];
    const editFront = (
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
              <input onChange={this.handleChange} type="text" name="title" value={board.front.title} />
            </div>

            <div className="edit-requester">
              User Story Requester:
              <input onChange={this.handleChange} type="text" name="requester" value={board.front.requester} />
            </div>

            <div className="edit-desc">
              Description:
              <input onChange={this.handleChange} type="text" name="desc" value={board.front.desc} />
            </div>

            <button type="submit" className="save-button">Save and Close</button>
          </form>
          <button type="button" onClick={this.flipCard}>Flip</button>

        </div>
      </div>
    );

    const editBack = (
      <div className = "modal">
        <div className ="modal-board" ref= {this.setWrapperRef}>
          <form onSubmit ={(event) => {
            event.preventDefault();
            this.props.updateStoryBoards(this.state.storyBoards);
            this.props.setModalFalse();
            this.props.setEditingFalse()
          }} className="modal-form">
          <h3>Acceptance Criteria</h3>
          <div>
            <ul>
              {
                board.back.map((acceptanceItem, index) => {
                  return <input key = {acceptanceItem.id} name={index} onChange={this.handleChange} type="text" value={acceptanceItem.item} />
                })
              }
            </ul>
          </div>
          <button type="submit" className="save-button">Save and Close</button>
          </form>
          <button type="button" onClick={this.flipCard}>Flip</button>
        </div>
      </div>
    );

    return (
      <div>
        {
          this.state.boardFront ? editFront : editBack
        }
      </div>
    )
  }
}

export default EditableBoardModal
