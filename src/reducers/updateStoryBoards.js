const storyboards = {
    1: {id:1, title: "Storyboard 1", requester:"Tom", desc:"A String of the details of the task/board 1"},
    2: {id:2, title: "Storyboard 2", requester:"Dan", desc:"A String of the details of the task/board 2"},
    3: {id:3, title: "Storyboard 3", requester:"Jon", desc:"A String of the details of the task/board 3"},
    4: {id:4, title: "Storyboard 4", requester:"Marc", desc:"A String of the details of the task/board 4"},
    5: {id:5, title: "Storyboard 5", requester:"Jim", desc:"A String of the details of the task/board 5"},
    6: {id:6, title: "Storyboard 6", requester:"Dave", desc:"A String of the details of the task/board 6"},
  };
/* JONCOM
// Again, if these here storyboards are stored in an array, the order would be implicit in the datastructure, and you
// would probably have a more stable code base over all as it grows larger.
// It could look like [{id: 1, title: "bla"}].
//
// It makes sense for storing the data in a SQL database later, where order of insertion usually isn't a viable option
// and there needs to be a separate table for that, but even if that was the case, I would let the backend handle
// the array to
 */



function updateStoryBoards(state = storyboards, action){
  switch(action.type){
    case 'UPDATE_STORYBOARDS':
      return action.storyBoards;
    default:
      return state;
  }
}

export default updateStoryBoards;


