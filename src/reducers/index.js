import { combineReducers } from 'redux';
import updateModalBoolean from './updateModalBoolean';
import updateBoardClickedId from './updateBoardClickedId'
import updateEditingBoolean from './updateEditingBoolean'
import updateStoryBoardsOrder from './updateStoryBoardsOrder'
import updateStoryBoards from './updateStoryBoards'
import updateArchivedCards from './updateArchivedCards'
import updateNewBoard from "./updateNewBoard";

/* JONCOM
// Since reducers are more like "data stores" I don't understand why they're called split into so many
// different ones. I would probably rather see that they're already called what you call them when added to the app
// like: "modal", "boardClicked" etc.
//
// Some of these are really small, and might be merged with others, for example storyBoards + storyBoardsOrder
// (See inside for more comment)
 */

export default combineReducers({
  modal: updateModalBoolean,
  boardClicked: updateBoardClickedId,
  editing: updateEditingBoolean,
  storyBoardsOrder: updateStoryBoardsOrder,
  storyBoards: updateStoryBoards,
  archive: updateArchivedCards,
  newBoard: updateNewBoard
});
