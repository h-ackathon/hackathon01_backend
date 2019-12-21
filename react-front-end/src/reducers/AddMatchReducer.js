import {
  ADD_MATCH_INPUT_CHANGED,
  ADD_MATCH_TEAM_CHANGED,
  ADD_MATCH_LEAGUE_CHANGED,
  ADD_MATCH_DATE_CHANGED,
  ADD_MATCH_TIME_CHANGED,
} from "../actions/types";


const INITIAL_STATE = {
  name: '',
  league: '',
  teamone: null,
  teamtwo: null,
  date: '',
  time: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MATCH_LEAGUE_CHANGED:
      return { ...state, league: action.payload };
    case ADD_MATCH_DATE_CHANGED:
      return { ...state, date: action.payload };
    case ADD_MATCH_TIME_CHANGED:
      return { ...state, time: action.payload };
    case ADD_MATCH_TEAM_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}