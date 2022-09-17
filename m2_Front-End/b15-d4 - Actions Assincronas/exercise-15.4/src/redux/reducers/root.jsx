import { combineReducers } from "redux";
import { redditReducer } from './redditReducer'

const rootReducers = combineReducers({
  redditReducer,
})

export default rootReducers;