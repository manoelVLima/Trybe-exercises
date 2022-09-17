import actionTypes from "../actions/actionsType";

const INITIAL_STATE = {
  posts: []
}
export const redditReducer= (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GET_POSTS: return {
      ...state
    }
    default: return state;
  }
}
