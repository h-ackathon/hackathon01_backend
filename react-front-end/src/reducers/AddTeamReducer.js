import {
  TEAM_FORM_INPUT_CHANGED,
  TEAM_FORM_LEAGUE_CHANGED,
  RESET_TEAM_FORM,
} from "../actions/types";

const INITIAL_STATE = {
  league: null,
  name: '',
  key: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_FORM_INPUT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case RESET_TEAM_FORM:
      return { ...state, ...INITIAL_STATE };
    case TEAM_FORM_LEAGUE_CHANGED:
      return { ...state, league: action.payload };
    default:
      return state;
  }
}