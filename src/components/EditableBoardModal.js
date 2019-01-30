import React from 'react'

class EditableBoardModal extends React.Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewCriteria = this.addNewCriteria.bind(this);

    this.state = {
      storyBoards: props.storyBoards,
      boardFront: true
    }
  }

  handleChange(e){
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

  handleSubmit(event) {

    event.preventDefault();


    // below ensures that only filled in criteria will be saved
    let storyBoardsCopy =  JSON.parse(JSON.stringify(this.state.storyBoards));
    const board = storyBoardsCopy[this.props.boardClicked];
    board.back = board.back.filter(criteria => criteria.item.length > 0);

    this.setState({
      storyBoards: storyBoardsCopy
    }, () => {
      this.props.updateStoryBoards(this.state.storyBoards);
      this.props.setModalFalse();
      this.props.setEditingFalse()
    })
  }

  flipCard(){
    this.setState(state => ({
      boardFront: !state.boardFront
    }))
  }

  addNewCriteria(){

    let storyboardsCopy =  JSON.parse(JSON.stringify(this.state.storyBoards));
    const board = storyboardsCopy[this.props.boardClicked];
    const arrayOfAcceptanceCritIds = board.back.map(acceptanceCrit => acceptanceCrit.id);
    const largestId = Math.max(...arrayOfAcceptanceCritIds);
    const newId = largestId +1;

    board.back.push({id:newId, item:""});

    this.setState({
      storyBoards: storyboardsCopy
    });

  }

  deleteCriteria(id){
    let storyboardsCopy =  JSON.parse(JSON.stringify(this.state.storyBoards));
    let board = storyboardsCopy[this.props.boardClicked];
    board.back = board.back.filter(criteria => criteria.id !== id);

    this.setState({
      storyBoards: storyboardsCopy
    });

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
          <form onSubmit ={this.handleSubmit} className="modal-form">
          <h3>Acceptance Criteria</h3>
          <div>
            <ul>
              {
                board.back.map((acceptanceItem, index) => {
                  const id = acceptanceItem.id;
                  return (
                    <div key = {id} >
                      <input name={index} onChange={this.handleChange} type="text" value={acceptanceItem.item} />
                      <button type="button" onClick={() => this.deleteCriteria(id)}>X</button>
                    </div>
                      )
                })
              }
            </ul>
          </div>
          <button type="submit" className="save-button">Save and Close</button>
          </form>
          <button type="button" onClick = {this.addNewCriteria} className="add-new">Add New Criteria</button>
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
