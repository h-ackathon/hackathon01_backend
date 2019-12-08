import {
    FETCH_ALL_LEAGUES, 
    SET_MATCH, SET_PLAYER, SET_STAT,
    LOADING_START, LOADING_END,
    SET_LEAGUE_MATCHES_AND_PLAYERS,
} from './types';
import Axios from 'axios';
import { API_URL } from '../constants';

export function saveStat() {
    console.log("argss", 
    {
        league: arguments[0],
        match: arguments[1],
        player: arguments[2],
        ...arguments[3]
    }
    );
    return function (dispatch) {
        dispatch({
            type: LOADING_START,
            payload: true
        });
        Axios.post(`${API_URL}savestat`, {
            league: arguments[0],
            match: arguments[1],
            player: arguments[2],
            ...arguments[3]
        })
            .then(function (resp) {
                if (resp.data.status === 200) {
                    dispatch({
                        type: LOADING_END,
                        payload: false
                    });
                }
                else throw `ERROR CODE -->> ${resp.data.status}`;
            })
            .catch(function (err) {
                dispatch({
                    type: LOADING_END,
                    payload: {
                        error: true,
                        error_message: err
                    }
                });
            });
    };
};

export function fetchAllLeagues() {
    return function (dispatch) {
        dispatch({
            type: LOADING_START,
            payload: true
        });
        Axios.get(`${API_URL}allLeagues`)
            .then(function (resp) {
                if (resp.data.status === 200) {
                    dispatch({
                        type: FETCH_ALL_LEAGUES,
                        payload: resp.data.response
                    });
                    dispatch({
                        type: LOADING_END,
                        payload: false
                    });
                }
                else throw `ERROR CODE -->> ${resp.data.status}`;
            })
            .catch(function (err) {
                dispatch({
                    type: LOADING_END,
                    payload: {
                        error: true,
                        error_message: err
                    }
                });
            });
    };
};

export function onLeagueChange({target}) {
    return function (dispatch) {
        dispatch({
            type: LOADING_START,
            payload: true
        });
        Promise.all(
            [
                Axios.get(`${API_URL}leaguematches?league=${target.value}`),
                Axios.get(`${API_URL}leagueplayers?league=${target.value}`)
            ]
        )
            .then(function (resp) {
                const r = resp.map(function (r) {
                    return r.data.status === 200 ? r.data.response : [];
                });
                dispatch({
                    type: SET_LEAGUE_MATCHES_AND_PLAYERS,
                    payload: {
                        league: target.value,
                        matches: r[0],
                        players: r[1] 
                    }
                });
                dispatch({
                    type: LOADING_END,
                    payload: true
                });
            })
            .catch(function (err) {
                dispatch({
                    type: LOADING_END,
                    payload: {
                        error: true,
                        error_message: err
                    }
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