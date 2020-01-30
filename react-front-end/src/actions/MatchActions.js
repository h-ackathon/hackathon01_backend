import {
  GET_ALL_TEAMS,
  ADD_MATCH_TEAM_CHANGED,
  ADD_MATCH_LEAGUE_CHANGED,
  ADD_MATCH_DATE_CHANGED,
  ADD_MATCH_TIME_CHANGED,
} from "./types";
import axios from 'axios';
import { API_URL } from "../constants";

export const addMatch = (match) => {
  return dispatch => {
    axios.post(`${API_URL}addmatch`, { match: match })
      .then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
  }
}

export const matchFormTeamChanged = (value, prop) => {
  return {
    type: ADD_MATCH_TEAM_CHANGED,
    payload: { value, prop }
  }
}

export const matchFormDateChanged = (value) => {
  return {
    type: ADD_MATCH_DATE_CHANGED,
    payload: value.target.value
  }
}

export const matchFormTimeChanged = (value) => {
  return {
    type: ADD_MATCH_TIME_CHANGED,
    payload: value.target.value
  }
}

export const matchFormGetTeams = (leagueId) => {
  return dispatch => {
    dispatch({
      type: ADD_MATCH_LEAGUE_CHANGED,
      payload: leagueId.target.value,
    });
    axios.get(`${API_URL}getleagueteams/?leagueId=${leagueId.target.value}`)
      .then((result) => {
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