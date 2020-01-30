import {
  ADD_PLAYER_FORM_LEGUE,
  PLAYER_INPUT_NAME_CHANGED,
  PLAYER_INPUT_TEAM_CHANGED,
  PLAYER_INPUT_RADIO_CHANGED,
  ADD_TEAMS_ARRAY,
  CLEAR_ADD_PLAYER_FORM,
} from "../actions/types";

const INITIAL_STATE = {
  league: null,
  prevLeague: null,
  team: null,
  teams: [],
  name: '',
  image: 'http://justnewsly.com/wp-content/uploads/Fakhar-ZXaman.jpg',
  avatar_path: 'https://i.imgur.com/K3KJ3w4h.jpg',
  playerType: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER_FORM_LEGUE:
      return { ...state, league: action.payload };
    case PLAYER_INPUT_NAME_CHANGED:
      return { ...state, name: action.payload };
    case PLAYER_INPUT_TEAM_CHANGED:
      return { ...state, team: action.payload };
    case ADD_TEAMS_ARRAY:
      if (state.teams.indexOf(action.payload.team) < 0) {
        return { ...state, teams: state.teams.concat(action.payload.team) };
      }
      return { ...state };
    case PLAYER_INPUT_RADIO_CHANGED:
      return { ...state, playerType: action.payload };
    case CLEAR_ADD_PLAYER_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
}