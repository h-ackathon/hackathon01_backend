import {
  PLAYER_INPUT_NAME_CHANGED,
  PLAYER_INPUT_TEAM_CHANGED,
  PLAYER_INPUT_RADIO_CHANGED,
  ADD_TEAMS_ARRAY,
  CLEAR_ADD_PLAYER_FORM,
} from "./types";
import axios from 'axios';
import { API_URL } from '../constants';

export const inputChanged = (e) => {
  return {
    type: PLAYER_INPUT_NAME_CHANGED,
    payload: e.target.value
  }
}
export const inputTeamChanged = (team, league) => {
  return dispatch => {
    dispatch({
      type: PLAYER_INPUT_TEAM_CHANGED,
      payload: team
    });
    dispatch({
      type: ADD_TEAMS_ARRAY,
      payload: { team, league }
    });
  };
}
export const clearAddPlayerForm = () => {
  return {
    type: CLEAR_ADD_PLAYER_FORM,
  }
}
export const inputRadioChanged = (prop) => {
  return {
    type: PLAYER_INPUT_RADIO_CHANGED,
    payload: prop
  }
}
export const addPlayer = (player) => {
  return dispatch => {
    axios.post(`${API_URL}addplayer`, { player: player })
      .then((result) => {
        console.log(result);
        dispatch({
          type: CLEAR_ADD_PLAYER_FORM,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}