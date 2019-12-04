import {
    FETCH_ALL_LEAGUES, FETCH_ALL_LEAGUES_LOADING, FETCH_ALL_LEAGUES_ERROR,
    SET_MATCH, SET_PLAYER, SET_STAT,
    SAVE_STAT_LOADING, SAVE_STAT_FAILURE,
    SET_LEAGUE_MATCHES_AND_PLAYERS_LOADING, SET_LEAGUE_MATCHES_AND_PLAYERS_ERROR,
    SET_LEAGUE_MATCHES_AND_PLAYERS,
} from './types';
import Axios from 'axios';
import { API_URL } from '../constants';

export function saveStat() {
    return function (dispatch) {
        dispatch({
            type: SAVE_STAT_LOADING,
            payload: true
        });
        Axios.post(`${API_URL}savestat`)
            .then(function (resp) {
                if (resp.data.status === 200)
                    dispatch({
                        type: SAVE_STAT_LOADING,
                        payload: false
                    });
                else throw `ERROR CODE -->> ${resp.data.status}`;
            })
            .catch(function (err) {
                dispatch({
                    type: SAVE_STAT_FAILURE,
                    payload: err
                });
            });
    };
};

export function fetchAllLeagues() {
    return function (dispatch) {
        dispatch({
            type: FETCH_ALL_LEAGUES_LOADING,
            payload: true
        });
        Axios.get(`${API_URL}allLeagues`)
            .then(function (resp) {
                if (resp.data.status === 200)
                    dispatch({
                        type: FETCH_ALL_LEAGUES,
                        payload: resp.data.response
                    });
                else throw `ERROR CODE -->> ${resp.data.status}`;
            })
            .catch(function (err) {
                dispatch({
                    type: FETCH_ALL_LEAGUES_ERROR,
                    payload: err
                });
            });
    };
};

export function onLeagueChange(event) {
    return function (dispatch) {
        dispatch({
            type: SET_LEAGUE_MATCHES_AND_PLAYERS_LOADING,
            payload: event.target.value
        });
        Promise.all(
            [
                Axios.get(`${API_URL}leaguematches?league=${event.target.value}`),
                Axios.get(`${API_URL}leagueplayers?league=${event.target.value}`)
            ]
        )
            .then(function (resp) {
                console.log("l", resp);
                const l = resp.map(function (r) {
                    return r.data.status === 200 ? r.data.response : [];
                });
                dispatch({
                    type: SET_LEAGUE_MATCHES_AND_PLAYERS,
                    payload: l
                });
            })
            .catch(function (err) {
                dispatch({
                    type: SET_LEAGUE_MATCHES_AND_PLAYERS_ERROR,
                    payload: err
                });
            });
    };
};

export function onMatchChange(event) {
    return {
        type: SET_MATCH,
        payload: event.target.value
    };
};

export function onPlayerChange(event) {
    return {
        type: SET_PLAYER,
        payload: event.target.value
    };
};

export function onStatChange(event) {
    return {
        type: SET_STAT,
        payload: { key: event.target.id, value: parseInt(event.target.value) }
    };
};