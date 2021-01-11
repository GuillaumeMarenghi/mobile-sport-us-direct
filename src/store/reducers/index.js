import { combineReducers } from "redux";

import { liveScores } from "./livescores";
import { infos } from "./infos";
import { highlights } from "./highlights";
import { lastScores } from "./lastScores";
import { nextScores } from "./nextScores";
import { schedules } from "./schedules"

export default combineReducers({
  liveScores,
  infos,
  highlights,
  lastScores,
  nextScores,
  schedules
});