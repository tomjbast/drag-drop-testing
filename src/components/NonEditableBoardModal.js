import React from 'react'

class NonEditableBoardModal extends React.Component {

  constructor(){
    super();

    this.state = {
      boardFront: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  // line 13 - 29 deal with closing the modal if clicking outside of modal
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
      this.setState({
        boardFront: true
      }, () => this.props.setModalFalse())
    }
  }

  flipCard(){
    this.setState(state => ({
      boardFront: !state.boardFront
    }))
  }

  render() {
    const board = this.props.storyBoards[this.props.boardClicked];
    const boardFront = (
      <div className = "modal" >
        <div className ="modal-board" ref= {this.setWrapperRef}>

          <div className ="modal-title">
            <h3>{board.front.title}</h3>
          </div>

          <div className ="modal-requester">
            <h4>{board.front.requester}</h4>
          </div>

          <div className ="modal-desc">
            <h6>{board.front.desc}</h6>
          </div>

          <button onClick={() => this.props.setModalFalse()}>Close</button>
          <button onClick={this.flipCard}>Flip</button>
        </div>
      </div>
    );

    const boardBack = (
      <div className = "modal">
        <div className ="modal-board" ref= {this.setWrapperRef}>
        <h3>Acceptance Criteria</h3>
        <div>
          <ul>
            {
              board.back.map(acceptanceItem => {
                return <li key = {acceptanceItem.id}>{acceptanceItem.item}</li>
              })
            }
          </ul>
        </div>
        <button type="button" onClick={() => this.props.setModalFalse()}>Close</button>
        <button type="button" onClick={this.flipCard}>Flip</button>
        </div>
      </div>
    );


    return (
      <div>
        {
          this.state.boardFront ? boardFront : boardBack
        }
      </div>
      )
  }
}

export default NonEditableBoardModal
