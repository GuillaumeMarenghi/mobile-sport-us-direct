import { combineReducers } from "redux";

import { liveScores } from "./livescores";
import { infos } from "./infos";




export default combineReducers({
  liveScores,
  infos
});