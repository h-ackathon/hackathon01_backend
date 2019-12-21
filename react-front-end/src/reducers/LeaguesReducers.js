import {
  GET_ALL_LEAGUES,
} from "../actions/types";

const INITIAL_STATE = {
  allLeagues: [],
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_LEAGUES:
      return { ...state, allLeagues: action.payload };
    default:
      return state;
  }
}