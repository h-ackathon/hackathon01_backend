import {
  GET_ALL_TEAMS,
  ADD_PLAYER_FORM_LEGUE,
  TEAM_FORM_INPUT_CHANGED,
  TEAM_FORM_LEAGUE_CHANGED,
  RESET_TEAM_FORM,
} from "./types";
import axios from 'axios';
import { API_URL } from '../constants/index';

export const getAllTeams = (leagueId) => {
  return dispatch => {
    // console.log("LEAGUE ID FROM ALL TEAMS:--", leagueId.target.value);
    dispatch({
      type: ADD_PLAYER_FORM_LEGUE,
      payload: leagueId.target.value,
    });
    axios.get(`${API_URL}getleagueteams/?leagueId=${leagueId.target.value}`)
      .then((result) => {
        // console.log("ALL TEAMS FROM LEAGUE:--", result);
        dispatch({
          type: GET_ALL_TEAMS,
          payload: result.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const teamFormInputChanged = (value, prop) => {
  return {
    type: TEAM_FORM_INPUT_CHANGED,
    payload: { value, prop }
  }
}

export const teamFormLeagueChanged = (e) => {
  return {
    type: TEAM_FORM_LEAGUE_CHANGED,
    payload: e.target.value
  }
}

export const addTeam = (team) => {
  return dispatch => {
    axios.post(`${API_URL}addteam`, { team: team })
      .then((result) => {
        console.log(result);
        dispatch({
          type: RESET_TEAM_FORM,
        });
      }).catch((err) => {
        console.log(err);
      });
  }
}