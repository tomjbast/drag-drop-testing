import React from 'react'

class NewBoardModal extends React.Component {

  constructor(props){
    super(props);

    this.handleFrontChange = this.handleFrontChange.bind(this);
    this.handleBackChange = this.handleBackChange.bind(this);
    this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.addNewCriteria = this.addNewCriteria.bind(this);
    this.flipCard = this.flipCard.bind(this);

    this.state = {
      boardFront: true,
      newBoard: {
        id: null,
        front: {
          title: "",
          requester: "",
          desc: ""
        },
        back: [{id:1, item:""}]
      }
    }
  }

  handleSubmit(event){

    event.preventDefault();
    const storyBoardsKeys = Object.keys(this.props.storyBoards);
    const lastKey = storyBoardsKeys[storyBoardsKeys.length-1];
    const newKey = parseInt(lastKey)+1;

    let newBoardCopy = JSON.parse(JSON.stringify(this.state.newBoard));
    newBoardCopy.id = newKey;

    this.setState({
      newBoard: newBoardCopy
    }, () => {
      this.props.addStoryBoard(this.props.storyBoards, this.state.newBoard, this.props.storyBoardsOrder);
      this.props.setNewBoardFalse();
    });

  }

  handleFrontChange(e){
    let newBoardCopy = JSON.parse(JSON.stringify(this.state.newBoard));
    newBoardCopy.front = Object.assign({}, newBoardCopy.front, {[e.target.name]: e.target.value});

     this.setState({
       newBoard: newBoardCopy
    });
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutsideModal, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideModal, false)
  }

  setWrapperRef(node){
    this.wrapperRef = node;
  }

  handleClickOutsideModal(event){
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.handleSubmit(event);
    }
  }

  flipCard(){
    this.setState(state => ({
      boardFront: !state.boardFront
    }))
  }

  addNewCriteria(){

    const newBoardCopy = JSON.parse(JSON.stringify(this.state.newBoard));
    const arrayOfAcceptanceCritIds = newBoardCopy.back.map(acceptanceCrit => acceptanceCrit.id);
    const largestId = Math.max(...arrayOfAcceptanceCritIds);
    const newId = largestId +1;

    newBoardCopy.back.push({id:newId, item:""});

    this.setState({
      newBoard: newBoardCopy
    });

  }

handleBackChange(e){

  let newBoardCopy = JSON.parse(JSON.stringify(this.state.newBoard));

  newBoardCopy.back[e.target.name].item = e.target.value;

  // let formValue = e.target.value;
  // console.log(e.target.value);
  // newBoardCopy.back.push(e.target.value);

  this.setState({
    newBoard: newBoardCopy
  });

}

  render() {
    const editFront = (
      <div className = "modal">
        <div className ="modal-board" ref= {this.setWrapperRef}>

          <form onSubmit ={(event) => {this.handleSubmit(event)}} className="modal-form">

            <div className="edit-title">
              User Story Title:
              <input onChange={this.handleFrontChange} type="text" name="title" value={this.state.newBoard.front.title}/>
            </div>

            <div className="edit-requester">
              User Story Requester:
              <input onChange={this.handleFrontChange} type="text" name="requester" value={this.state.newBoard.front.requester}/>
            </div>

            <div className="edit-desc">
              Description:
              <input onChange={this.handleFrontChange} type="text" name="desc" value={this.state.newBoard.front.desc}/>
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
          <form onSubmit ={(event) => this.handleSubmit(event)} className="modal-form">
          <h3>Acceptance Criteria</h3>
          <div>
            {
              this.state.newBoard.back.map((acceptanceCriteria, index) => {
                return <input type="text" key={acceptanceCriteria.id} onChange={this.handleBackChange} name={index} value ={acceptanceCriteria.item} />
              })
            }
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

export default NewBoardModal
