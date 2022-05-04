import { combineReducers } from "redux"
import cardReducer from "./cardListReducer";
import userReducer from "./user";
import globalAppStateReducer from "./glodalAppStateReducer";
import undoable, { excludeAction } from 'redux-undo';
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

const cardListReducer = combineReducers({
  cardListState: cardReducer,
  user: userReducer,
  appState: globalAppStateReducer,
  reducer1: reducer1,
  reducer2: reducer2
})

export default cardListReducer