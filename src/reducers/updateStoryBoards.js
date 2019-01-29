const storyboards = {
  1: {
    id:1,
    front: {title: "Storyboard 1", requester:"Tom", desc:"A String of the details of the task/board 1"},
    back: [
      {id:1, item: "thing 1"},
      {id:2, item: "thing 2"},
      {id:3, item: "thing 3"},
      {id:4, item: "thing 4"},
      {id:5, item: "thing 5"},
      {id:6, item: "thing 6"}
      ]
  },
  2: {
    id:2,
    front: {title: "Storyboard 2", requester:"Dan", desc:"A String of the details of the task/board 2"},
    back: [
      {id:1, item: "thing 1"},
      {id:2, item: "thing 2"},
      {id:3, item: "thing 3"},
      {id:4, item: "thing 4"},
      {id:5, item: "thing 5"},
      {id:6, item: "thing 6"}
    ]
  },
  3: {
    id:3,
    front: {title: "Storyboard 3", requester:"Jon", desc:"A String of the details of the task/board 3"},
    back: [
      {id:1, item: "thing 1"},
      {id:2, item: "thing 2"},
      {id:3, item: "thing 3"},
      {id:4, item: "thing 4"},
      {id:5, item: "thing 5"},
      {id:6, item: "thing 6"}
    ]
  },
  4: {
    id:4,
    front: {title: "Storyboard 4", requester:"Marc", desc:"A String of the details of the task/board 4"},
    back: [
      {id:1, item: "thing 1"},
      {id:2, item: "thing 2"},
      {id:3, item: "thing 3"},
      {id:4, item: "thing 4"},
      {id:5, item: "thing 5"},
      {id:6, item: "thing 6"}
    ]
  },
  5: {
    id:5,
    front: {title: "Storyboard 5", requester:"Timmy", desc:"A String of the details of the task/board 5"},
    back: [
      {id:1, item: "thing 1"},
      {id:2, item: "thing 2"},
      {id:3, item: "thing 3"},
      {id:4, item: "thing 4"},
      {id:5, item: "thing 5"},
      {id:6, item: "thing 6"}
    ]
  },
  6: {
    id:6,
    front: {title: "Storyboard 6", requester:"Bob", desc:"A String of the details of the task/board 6"},
    back: [
      {id:1, item: "thing 1"},
      {id:2, item: "thing 2"},
      {id:3, item: "thing 3"},
      {id:4, item: "thing 4"},
      {id:5, item: "thing 5"},
      {id:6, item: "thing 6"}
    ]
  }
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
