import {
  GET_ALL_TEAMS,
} from "../actions/types";

const INITIAL_STATE = {
  allTeams: [],
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TEAMS:
      return { ...state, allTeams: action.payload };
    default:
      return state;
  }
}